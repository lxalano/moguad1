var Validator = function(form, options) {
    this.settings = options;
    this.form = form;
    this.eleValidators = [];
    this.methods = {
        required: function(value) {
            if (value == '')
                return false;
            return true;
        },
        specialCharacter: function(value) {
            return !(/[^a-zA-Z0-9_.\-]/.test(value));
        },
        minLength: function(value, compare) {
            if (value.length < compare)
                return false;
            return true;
        },
        maxLength: function(value, compare) {
            if (value.length > compare)
                return false;
            return true;
        },
        matchWith: function(value, objCompare) {
            if (value != $.trim( $(objCompare).val() ) )
                return false;
            return true;
        },
        email: function(value) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test( value );
        },
        inputUserName: function(value) {
            return !(/[^a-zA-Z0-9]/.test(value));
        },
        inputEmail: function(value) {
            return !(/[^a-zA-Z0-9_.\-@]/.test(value));
        },
        digital: function(value) {
            return !(/[^0-9]/.test(value));
        },
        greaterEqualThan: function(value, compare) {
            if ( parseInt(value) < parseInt(compare) )
                return false;
            return true;
        },
        lessEqualThan: function(value, compare) {
            if ( parseInt(value) > parseInt(compare) )
                return false;
            return true;
        },
        noSpaceChar: function(value) {
            return !(/\s/g.test(value));
        },
    };

    this.init();
};

Validator.prototype.init = function() {
    var _this    = this,
        elements = $(_this.form).find('input[data-validator],select[data-validator],textarea[data-validator]');

    elements.each( function() {
        var elmValidate = $(this).attr('data-validator').split('|'),
            rules = [];

        for (var i = 0; i < elmValidate.length; i++) {
            var validatorType = elmValidate[i],
                compareWidth = $(this).attr('data-' + validatorType + '-compare')
                message = $(this).attr('data-' + validatorType + '-message');

            rules.push({
                method: validatorType,
                compare: ( typeof compareWidth !== 'undefined' ? compareWidth : false ),
                message: ( typeof message !== 'undefined' ? message : false )
            });
        }

        _this.eleValidators.push({
            element: this,
            rules: rules
        });
    });
};

Validator.prototype.addError = function(element, message, $form) {
    var $element = $(element);

    if ( typeof $form !== 'undefined') {
        $element = $form.find(element);
        if ( $element.length === 0) {
            $element = $form.find('[name=' + element.substr(1) + ']');
        }
    }

    $element.removeClass('error');
    $element.next('.required').remove();

    $element.addClass('error');
    $element.after('<span class="required">' + message + '</span>');
}

Validator.prototype.checkForm = function() {
    var errorForm = false;
    for (var i = 0; i < this.eleValidators.length; i++) {
        var eleValidator = this.eleValidators[i],
            element = eleValidator.element,
            $element = $(element),
            elmValue = $element.val(),
            elmType = $element.attr('type'),
            rules = eleValidator.rules;

        if (elmType == 'checkbox') {
            var $checkbox = $element.next('label[for=' + $element.attr('id') + ']');
            if ( !$element.prop('checked') ) {
                errorForm = true;
                $checkbox.addClass('checkbox-error');
            }
            else {
                $checkbox.removeClass('checkbox-error');
            }
        }
        else {
            for (var j = 0; j < rules.length; j++) {
                var errorEle = false,
                    rule = rules[j],
                    method = rule.method,
                    compare = rule.compare,
                    message = rule.message;

                $element.removeClass('error');
                $element.next('.required').remove();

                if ( !this.methods[method](elmValue, compare) ) {
                    errorForm = true;
                    errorEle = true;
        
                    if ( !$element.hasClass('error') ) {
                        $element.addClass('error');
                    }
        
                    if ( message !== false ) {
                        $element.after('<span class="required">' + message + '</span>');
                    }
                }
                
                

                if (errorEle) {
                    break;
                }
            }
        }
    }

    return errorForm;
};

$.fn.validate = function( options, callback ) {
    var _this = this;

    _this.attr('novalidate', 'novalidate');

    $(_this).on('submit', function() {
        var validator = new Validator(this, options),
            error = validator.checkForm();

        if (error) {
            $(_this).addClass('has-error');
        }
        else {
            $(_this).removeClass('has-error');
        }

        if (!error) {
            return callback(this);
        }

        return !error;
    });
};
