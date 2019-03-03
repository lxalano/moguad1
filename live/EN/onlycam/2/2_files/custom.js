$(document).ready(function () {

	$('.randomNmb').text(randomNumber(40,65));

	var all = ["teen", "milf", "bbw", "ebony"];

	var email = getUrlVars()['e'];

	var bg = getUrlVars()['bg'];

	if((bg== undefined)||(bg>4)){
		bg = 1;
	}

	if(isMobile()){
		$('body').addClass('mbl');
		bg = 'mbl' + bg;
	} else {
		$('body').addClass('dsk');
	}

	//Get skin
	var s = getUrlVars()['s'];

	if((s!==undefined)&&(s<=9)){
		$('body').addClass('skin' + s);
	}

	//Get name
	var name = getUrlVars()['name'];

	if(name == undefined){
		name = 'canYouHandleme';
	}

	$('.handle-name').text(name);


	$('.bg-image').css('background-image','url(images/'+ bg + '.jpg)');

	$(".message").on('click', '.next', function () {

		$('.bg-image').hide();
		$('.message').hide();
		$('.steps-container').show();

	});


	$(".step-body.checks").on('click', 'input[name=type]', function (e) {
			var checked = $('input[type=checkbox]:checked').length;
			if (checked > 3 ) {
				$(this).prop('checked', false);
			}
	});


	$("form").submit(function(e){
			e.preventDefault();
			var finalLink = $('body').attr('data-link');
			var emailValue = $('input[type="email"]').val();
			var emailisValid = ValidateEmail(emailValue);
			if(emailisValid){
				finalLink = addParameterToURL(finalLink,'email',emailValue);
				window.location = finalLink;
			} else {
				$('.email-message').text('Enter a valid e-mail');
			}
	});


	$(".step-container").on('click', '.btn-next', function (e) {

				hideCurShowNext($(this));
				resetCheckboxesOfPreviousStep();

				if ( $( this ).hasClass( "start-results" ) ) {

					setTimeout(function () {
								$(".line1").show().fadeIn();
					}, 1500);

					setTimeout(function () {
								$(".line2").show().fadeIn();
					}, 3500);

					setTimeout(function () {
								$(".line3").show().fadeIn();
					}, 4500);

					setTimeout(function () {
								$(".line4").show().fadeIn();
					}, 6000);

					setTimeout(function () {
								$("#s7 .step-title h2").text('CONGRATULATIONS!!!');
					}, 6000);

					setTimeout(function () {

								if(email == 'no'){
									$(".loading-icon").hide();
									$(".get-access").fadeIn();
									$(".get-access").css('display','block');
								} else {
									$("#s7").hide();
									$("#s8").fadeIn();
								}

					}, 7000);

				}

				if ( $( this ).hasClass( "show-pagination" ) ) {
					$('.pagination-numbers').show();
				} else if ($( this ).hasClass( "show-next-pagination" )) {
					nextNumberActive();
				} else if ($( this ).hasClass( "hide-pagination" )){
					$('.pagination-numbers').hide();
				}

	});

});
