function unbindAll() {
    $('.answer-button').off();
}

$(function () {
    $('#step1').show();
    $('.answer-button').on('click', function () {
        if ($('#step1').is(":visible")) {
            $('#mapContainer').slideUp('fast');
            $('#step1').hide();
            $('#step2').show();
        }
        else if ($('#step2').is(":visible")) {
            $('#step2').hide();
            $('#step3').show();
        }
        else if ($('#step3').is(":visible")) {
            $('#step3').hide();
            $('#secondPara').slideUp('fast');
            $('#buttons').slideUp('fast');
            $('#matching').show();

            $('.progress-bar').css('width', '10%');
            setTimeout(function () {
                $('#checked1').show().css('display', 'block');
                $('.progress-bar').css('width', '30%');
            }, 340);
            setTimeout(function () {
                $('#checked2').show().css('display', 'block');
                $('.progress-bar').css('width', '60%');
            }, 1360);
            setTimeout(function () {
                $('#checked3').show().css('display', 'block');
                $('.progress-bar').css('width', '100%');
            }, 2830);
            setTimeout(function () {
                allDone();
            }, 3300);
        }
    });

    function allDone() {
        $('#matching').hide();
        $('.qualified').fadeIn();
    }
});