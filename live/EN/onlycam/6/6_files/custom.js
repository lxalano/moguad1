$(document).ready(function () {

	if(isMobile()){
		$('body').addClass('mbl');
	} else {
		$('body').addClass('dsk');
	}

	$(".step-container").on('click', '.btn-next', function (e) {

				var email = getUrlVars()['e'];

				var parent = $(this).parents('.step-container');
				//var next_parent = $(this).parents('.step-container');
				parent.removeClass('show-step');
				parent.next().addClass('show-step');

				if ( $( this ).hasClass( "show-pagination" ) ) {
					$('.pagination-numbers').show();
				} else if ($( this ).hasClass( "next-pagination" )) {
					//nextNumberActive();
					var active = $('li.active.num');
					active.removeClass('active');
					active.next('li').addClass('active');
				} else if ($( this ).hasClass( "hide-pagination" )){
					$('.pagination-numbers').hide();
				}

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
									$("#s10").removeClass('show-step');
									$("#s11").addClass('show-step');
								}

					}, 7000);

				}

	});

	var allVideos = document.getElementsByClassName("video-brick");
	var i;
	for(i = 0; i< allVideos.length; i++){
		var canvas = allVideos[i];
		var videoUrl  = canvas.getAttribute("data-video-url");
		console.log(videoUrl);
		var player = new jsmpeg('videos/' + videoUrl, {canvas:canvas, autoplay:true, loop: true, progressive:true});
	}

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

});
