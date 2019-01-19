$(function () {
    var $progressBar = $('.js-progress-bar'), 
        timoutRegistrationForm;

    function repositionRegisterForm() {
        var windowHeight = $(window).height(),
        formHeight = 0;

        $('.js-registration').children().each( function() {
            if (this.tagName.toUpperCase() != 'SCRIPT') {
                formHeight += $(this).height();
            }
        });

        if ( windowHeight < formHeight ) {
            $('body').addClass('lock-overlay');
        }
        else {
            $('body').removeClass('lock-overlay');
        }
    }

    function openRegistrationForm() {
        clearTimeout(timoutRegistrationForm);
        //make register form to visible to get height of it
        $('.js-registration').css({ display: 'block', visibility: 'hidden' });
        repositionRegisterForm();
        $('.js-registration').removeAttr('style');
        //show register form
        if ( $('.js-registration').hasClass('js-css-animation') ) {
            $('.js-registration').show();
        }
        else {
            $('.js-registration').fadeIn(400);
        }
        $(document.body).append('<div class="modal-overlay"></div>');
        $('html').addClass('lock-scroll');
    }

    function fadeInOutStep(obj) {
        var timer = $(obj).attr('data-loading-timeout');
        setTimeout( function() {
            $(obj).fadeOut(100, function () {
                if (typeof $(this).next() != 'undefined') {
                    $(this).next().fadeIn(100, function() {
                        fadeInOutStep(this);
                    });
                }
            });
        }, timer);
    }

    function progressBarActiveStep($showElement) {
        if ($progressBar.length > 0) {
            var curStep = 0;
            $('.js-registration .js-step').each( function(i) {
                if ( this == $showElement.get(0) ) {
                    curStep = i;
                }                        
            });

            if (curStep > $progressBar.find('li').length - 1) {
                curStep = $progressBar.find('li').length - 1;
            }

            $progressBar.find('li.active').removeClass('active').addClass('visible').parent().find('li').eq(curStep).addClass('active');
        }
    }

    function processToNextStep($showElement) {
        progressBarActiveStep($showElement);

        //trigger function before active step
        if (typeof beforeActiveStep === "function") { 
            beforeActiveStep($showElement);
        }

        //go to next step automatic
        if ( $showElement.hasClass('js-animation') ) {
            var timeoutGoNext = $showElement.attr('data-loading-timeout'),
                $loadingBar   = $showElement.find('.js-loading-bar'),
                $loadingSteps = $showElement.find('.js-loading-steps');

            if ( typeof timeoutGoNext != 'undefined' ) {
                var dataHiddenAnimationStep = $progressBar.attr('data-no-hide-animation-step');
                if (typeof dataHiddenAnimationStep == 'undefined' || dataHiddenAnimationStep != 'true') {
                    $progressBar.hide();
                }

                //trigger function before animation step
                if (typeof beforeAnimationStep === "function") { 
                    beforeAnimationStep();
                }

                setTimeout( function() {
                    $showElement.fadeOut(200, function () {
                        $progressBar.show();
                        goToNextStep($(this), $(this).next('.js-step'));

                        //trigger function after animation step
                        if (typeof afterAnimationStep === "function") { 
                            afterAnimationStep();
                        }
                    });
                }, timeoutGoNext);

                if ( typeof $loadingBar != 'undefined' ) {
                    var percent = 0;
                    setInterval( function() {
                        if ( percent <= 100) {
                            $loadingBar.find('span').css({ width: percent + '%' });
                            $loadingBar.find('span').text(percent + '%');
                        }
                        percent++;
                    }, ( (timeoutGoNext - 300) / 100) )
                }

                if ( typeof $loadingSteps != 'undefined' ) {
                    fadeInOutStep($loadingSteps.find('li').eq(0));
                }
            }
        }
    }

    function goToNextStep($hideElement, $showElement) {
        setTimeout(function() {
            repositionRegisterForm();
        }, 500);
        
        if ( $hideElement.hasClass('js-css-animation') && $showElement.hasClass('js-css-animation') ) {
            //css annimation
            $hideElement.removeClass('show').addClass('hide');
            $showElement.removeClass('hide').addClass('show');

            processToNextStep($showElement);
        }
        else {
            //default annimation
            $hideElement.fadeOut(200, function () {
                $showElement.fadeIn(100, function() {
                    processToNextStep($(this));
                });
            });
        }
    }

    $(window).on('orientationchange', function(e) {
        setTimeout(function() {
            repositionRegisterForm();
        }, 500); 
    });

    //open form automatically
    var autoOpenTimeout = $('.js-registration').attr('data-auto-open-timeout');
    if (typeof autoOpenTimeout != 'undefined') {
        if ( $('.js-registration').is(':hidden') ) {
            timoutRegistrationForm = setTimeout( function() {                
                openRegistrationForm();
            }, autoOpenTimeout);
        }
    }
 

    $('.js-form-submit').on('submit', function() {
        setTimeout(function() {
            repositionRegisterForm();
        }, 150);        
    });

    $('.js-open-registration').on('click', function(e) {
        if ( $('.js-registration').is(':hidden') ) {
            openRegistrationForm();
        }
    });
    //close register form
    $('.js-close-registration').on('click', function(e) {    
        e.preventDefault();
        e.stopPropagation();

        $('html').removeClass('lock-scroll');

        if ( $('.js-registration').hasClass('js-css-animation') ) {
            $('.js-registration').hide();
            $('body').removeClass('lock-overlay');
            $(document.body).find('.modal-overlay').remove();
        }
        else {
            $('.js-registration').fadeOut(400, function() {
                $('body').removeClass('lock-overlay');
                $(document.body).find('.modal-overlay').remove();
            });
        }
    });    

    //next step
    $('.js-step.js-enter-go-next').keydown(function(objEvent) {
		if (objEvent.keyCode == 13) {
            $(this).find('.js-next-step').trigger('click');
            return false;
        }
    });
    
    $('.js-next-step').on('click', function() {
        var error = false;
        if ( $(this).hasClass('js-validator-step') ) {
            var validator = new Validator($(this).closest('.js-step'), {});
            error = validator.checkForm();
        }

        if (error == true) {
            return false;
        }

        goToNextStep( $(this).closest('.js-step'), $(this).closest('.js-step').next('.js-step') );
    });

    //preview step
    $('.js-prev-step').on('click', function() {
        $(this).closest('.js-step').fadeOut(200, function () {
            $(this).prev('.js-step').fadeIn(100, function() {
                progressBarActiveStep($(this));
            });
        });
    });

    //go to target step
    $('[data-go-target-step]').on('click', function() {
        var targetStep = $(this).attr('data-go-target-step');
        $(this).closest('.js-step').fadeOut(200, function () {
            $(targetStep).fadeIn(100, function() {
                progressBarActiveStep($(this));
            });
        });
    });

    function showSubmitLoading() {
        $(document.body).append('<div class="js-loading lds-ripple"><span></span></div>');
        $(document.body).find('.modal-overlay').remove();
        $(document.body).append('<div class="modal-overlay highest"></div>');
    }

    function hideSubmitLoading() {
        $(document.body).find('.js-loading').remove();
        $(document.body).find('.modal-overlay.highest').removeClass('highest');
    }

    Object.keys = function(obj) {
        var keys = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
            keys.push(i);
            }
        }
        return keys;
    };

    Number.isInteger = Number.isInteger || function(value) {
        return typeof value === "number" && 
            isFinite(value) && 
            Math.floor(value) === value;
    };

    function addUnknowErrorMessage(obj, msg) {
        if ( obj.hasClass('js-add-unknow-msg-after') ) {
            obj.next('.unknown-error-msg').remove();
            obj.after('<span class="unknown-error-msg">' + msg + '</span>');
        }
        else {
            obj.prev('.unknown-error-msg').remove();
            obj.before('<span class="unknown-error-msg">' + msg + '</span>');
        }
    }

    function ajaxSubmitForm($form, $elementValidator) {
        var action = $form.attr('action'),
            redirect = $form.attr('data-redirect');

        $.ajax({
            url: action,
            type: 'post',
            dataType: 'json',
            data: $form.serialize(),
            beforeSend: function() {
                showSubmitLoading();
            },
            success: function(response) {
                if (response.success === false) {
                    hideSubmitLoading();
                    $.each(response.errors, function(element, errors) {
                        var errorKey = Object.keys(errors)[0],
                            errorMsg = errors[errorKey],
                            validator = new Validator(),
                            $btnSubmit = $form.find('button[type=submit]');
                        
                        if (element === 'unknown') {
                            var customMsg = $btnSubmit.attr('data-' + errorKey + '-message');
                            if ( typeof customMsg != 'undefined' ) {
                                errorMsg = customMsg;
                            }
                            addUnknowErrorMessage($btnSubmit, errorMsg);
                        }
                        else if ( Number.isInteger(element) ) {
                            var msgError = errors,
                                msgLoginError = $btnSubmit.attr('data-login-message-' + errors.toString().replace(/\s/g, '-').toLowerCase());

                            if ( typeof msgLoginError != 'undefined') {
                                msgError = msgLoginError;
                            }
                            
                            addUnknowErrorMessage($btnSubmit, msgError);
                        }
                        else {
                            var customMsg = $('#' + element).attr('data-' + errorKey + '-message');
                            if ( typeof customMsg != 'undefined' ) {
                                errorMsg = customMsg;
                            }
                            validator.addError('#' + element, errorMsg, $form);
                        }
                    });
                    return;
                }

                if ( typeof redirect == 'undefined') {
                    location.reload();
                }
                else if (redirect === 'login') {
                    window.location = response.url;
                }
                else if (redirect === 'no-redirect') {
                    window.location = response.result.deeplink;
                }
                else if (redirect === 'show-completed-page' && $('.js-completed-page').length > 0) {
                    $('.js-completed-page').fadeIn();
                    $('html').addClass('lock-scroll');
                    $(document.body).append('<div class="overlay-registration"></div>');
                    $(document.body).find('.modal-overlay').remove();
                    $(document.body).find('.js-loading').remove();
                    $(document.body).find('.js-registration').fadeOut();
                }
                else {
                    window.location = redirect;
                }
            }
        });
    }

    //submit form
    $('.js-form-submit').validate({}, function(form) {
        if ( $(form).attr('method').toUpperCase() === 'GET' ) {
            $(form).submit();
            return false;
        }
        
        //trigger function before submit
        if (typeof beforeSubmitForm === 'function') { 
            var result = beforeSubmitForm($(form));
            if (result === false) {
                return false;
            }
        }
        
        ajaxSubmitForm( $(form), $('.js-form-submit') );

        return false;
    });

    //step submit
    $('.js-btn-step-submit').on('click', function() {
        var error = false,
            $form = $(this).closest('.js-form-submit'),
            $step = $(this).closest('.js-step'),
            validator = new Validator($step, {});
            
        error = validator.checkForm();

        setTimeout(function() {
            repositionRegisterForm();
        }, 150);
        
        if (error == true) {
            return false;
        }

        ajaxSubmitForm( $form, $step );
    });

    //birthday
    $('.js-date-picker #month, .js-date-picker #year').on('change', function () {
        var $day = $(this).closest('.js-date-picker').find('#day'),
            dayValue = $day.val(),
            monthValue = $(this).closest('.js-date-picker').find('#month').val(),
            yearValue = $(this).closest('.js-date-picker').find('#year').val();

        $day.html('');
        
        var maxDay = 31;
        if (monthValue != '') {
            if (monthValue == 2) {
                maxDay = 28;
                if (yearValue > 0 && yearValue % 4 == 0) {
                    maxDay = 29;
                }
            } else if ( (monthValue < 8 && monthValue % 2 == 0) || (monthValue > 8 && monthValue % 2 == 1) ) {
                maxDay = 30;
            }
        }

        for (var i = 1; i <= maxDay; i++) {
            $day.append('<option value="' + i + '">' + i + '</option>');
        }

        if (dayValue != '' && dayValue <= maxDay) {
            $day.val(dayValue);
        }
        else {
            $day.val(1);
        }
    });

    $('.js-date-picker #day, .js-date-picker #month, .js-date-picker #year').on('change', function () {
        var dayValue = $(this).closest('.js-date-picker').find('#day').val(),
            monthValue = $(this).closest('.js-date-picker').find('#month').val(),
            yearValue = $(this).closest('.js-date-picker').find('#year').val();

        if (dayValue != '' && monthValue != '' && yearValue != '') {
            $(this).closest('.js-step').find('.btn.disabled').removeClass('disabled');
        }
        else {
            $(this).closest('.js-step').find('.btn').addClass('disabled');
        }
    });

    //age range
    $('.js-age-range #searchAgeFrom').on('change', function () {
        var $ageFrom = $('.js-age-range #searchAgeFrom'),
            $ageTo = $('.js-age-range #searchAgeTo'),
            valueFrom = parseInt($ageFrom.val()),
            valueTo = parseInt($ageTo.val());

        $ageTo.html('');
        for (var i = valueFrom; i <= 100; i++) {
            $ageTo.append('<option value="' + i + '">' + i + '</option>');
        }
        
        if (valueFrom < valueTo) {
            $ageTo.val(valueTo);
        }
    });

    $('.js-form-submit input').on('paste',function(e) {
        var _this = this,
            validator = new Validator(),
            error = true;
            
        setTimeout(function() {
            var value = $(_this).val();

            if (_this.name.indexOf('username') > -1) {
                error = validator.methods.inputUserName(value);

                if (!error) {
                    value = value.replace(/[ @&\/\\#,+()$~%.'":*?<>{}[\]\=;]/g, '');
                    $(_this).val(value);
                }
            }
            else if (_this.name.indexOf('email') > -1) {
                error = validator.methods.inputEmail(value);

                if (!error) {
                    value = value.replace(/[ &\/\\#,+()$~%'":*?<>{}[\]\=;]/g, '');
                    $(_this).val(value);
                }
            }
        }, 100);
    });

    $('.js-form-submit input').on('keypress input', function(e) {
        var specialKeyboard = 'BackspaceDelHomeTabArrowLeftArrowRightArrowUpArrowDownEndDeleteEnterNumpadEnter';
        var eventCode = e.originalEvent.code ? e.originalEvent.code : e.originalEvent.key;

        if (this.type == 'password' || specialKeyboard.indexOf(eventCode) > -1) {
            return;
        }

        var charCode = !e.charCode ? e.which : e.charCode,
            validator = new Validator(),
            error = true;
        
        if (navigator.userAgent.match(/Android/i)) {
            if (e.originalEvent.data) {
                charCode = e.originalEvent.data.charCodeAt(0);
            }
            else {
                if (e.type == 'input') {
                    return false;
                }
                charCode = !e.originalEvent.charCode ? e.originalEvent.which : e.originalEvent.charCode;
            }
        }

        var char = String.fromCharCode(charCode);

        if (this.name.indexOf('username') > -1) {
            error = validator.methods.inputUserName(char);
        }
        else if (this.name.indexOf('email') > -1) {
            error = validator.methods.inputEmail(char);
        }

        if (!error) {
            if (navigator.userAgent.match(/Android/i) && e.originalEvent.data) {
                var inputValue = $(this).val(),
                    position = this.selectionStart;

                $(this).val(inputValue.substring(0, position - 1) + inputValue.substring(position, inputValue.length));
                this.selectionEnd = position - 1;
            }
            e.preventDefault();
            return false;
        }
    });
});