$(function () {
    var progressTime = 6000;
    
    function stepProgess(){
        setTimeout(function(){
            $('.box.js-step4').slideUp(800);
            setTimeout(function(){
                $('button[data-step="js-step5"]').trigger('click');
            },800)
        }, progressTime)
        return;
    }

    $('button[data-step]').click( function() {
        var $nextStep = $(this).attr('data-step');

        if ( !$nextStep )
            return false;

        $(this).closest('.js-step').fadeOut(200, function() {
            $('.wrapper-image').addClass('hide-mobile-small');
            $(document).find('.js-step.' + $nextStep).fadeIn(100, function() {
                if($nextStep == 'js-step4'){
                    $('.progress-bar').addClass('active');
                    stepProgess();
                }
            });            
        });
    });

    $('.js-select-list li').on('click', function() {
        var countSelected = $(this).parent().find('li.active').length;
        if (countSelected >= 3 && !$(this).hasClass('active')) {
            return false;
        }

        $(this).toggleClass('active');
    });
});