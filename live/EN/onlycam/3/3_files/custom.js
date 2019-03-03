$(document).ready(function () {

	if(isMobile()){
		$('body').addClass('mbl');
	} else {
		$('body').addClass('dsk');
	}

	$(".step-container").on('click', '.btn-next', function (e) {

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

	});

	var allVideos = document.getElementsByClassName("video-brick");
	var i;
	for(i = 0; i< allVideos.length; i++){
		var canvas = allVideos[i];
		var videoUrl  = canvas.getAttribute("data-video-url");
		console.log(videoUrl);
		var player = new jsmpeg('videos/' + videoUrl, {canvas:canvas, autoplay:true, loop: true, progressive:true});
	}

});
