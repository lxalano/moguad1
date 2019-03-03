$(document).ready(function () {

	var email = getUrlVars()['e'];

	$(".step-container").on('click', '.btn-next', function (e) {

			e.preventDefault();
			var parent = $(this).parents('.step-container');
			parent.animate({'opacity':'0', 'padding-top':'40px'}, 500, function () {
							parent.removeClass('displayed').addClass('hidden').next('.step-container').css({'opacity':'0', 'padding-top':'40px'}).addClass('displayed').animate({'opacity':'1', 'padding-top':'0px', }, 500);
			});

			if($(this).hasClass('show-results')){

				setTimeout(function(){
					$('#res1').fadeIn();
				},1500);

				setTimeout(function(){
					$('#res2').fadeIn();
				},3000);

				setTimeout(function(){
					$('#res3').fadeIn();
				},4500);

				setTimeout(function(){
					$('#res4').fadeIn();
				},6000);

				setTimeout(function(){
					$('.loading-bar').hide();
				},7000);

				setTimeout(function(){
					$('.loading-bar').hide(function(){
						$('.access-btn').fadeIn();
						$('.analyzing-answers').text('CONGRATULATIONS!!!');
						if(email == 'yes'){
							$('.email-form').fadeIn();
						}
					});
				},7500);

			}

	});



		$("body").on('click', '.access-btn', function (e) {
			var finalLink = $('body').attr('data-link');
			if(email == 'yes'){
				var emailValue = $('input[type="email"]').val();
				var emailisValid = ValidateEmail(emailValue);
				if(emailisValid){
					finalLink = addParameterToURL(finalLink,'email',emailValue);
					window.location = finalLink;
				} else {
					$('.email-error-message').show();
				}
			} else {
				window.location = finalLink;
			}
		});


		if(isMobile()){
			$('body').addClass('mbl');
		} else {
			$('body').addClass('dsk');
		}

});
