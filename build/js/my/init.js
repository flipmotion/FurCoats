$(document).ready(function() {
	/*scroll spy */
	if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
		$('[data-item="phone"]').mask("+7 (999) 999-99-99");
	}
	$("body").scrollspy({target: "#menu", offset:80});
	/*scroll spy END*/
	/*smooth links */
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 80
		}, 1000);
		return false;
	});
	var owlMain = $('[data-item="slider-main"]');
	owlMain.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
		],
		dots: true,
	});

	var owlMain2 = $('[data-item="slider-main-1"]');
	var owlMain3 = $('[data-item="slider-main-2"]');
	var owlMain4 = $('[data-item="slider-main-3"]');
	var owlMain5 = $('[data-item="slider-main-4"]');
	var owlMain6 = $('[data-item="slider-main-5"]');
	var owlMain7 = $('[data-item="slider-main-6"]');
	var owlMain8 = $('[data-item="slider-main-7"]');
	var owlMain9 = $('[data-item="slider-main-8"]');
	var owlMain10 = $('[data-item="slider-main-9"]');
	var owlMain11 = $('[data-item="slider-main-10"]');
	var owlMain12 = $('[data-item="slider-main-11"]');
	var owlMain13 = $('[data-item="slider-main-12"]');
	var owlMain14 = $('[data-item="slider-main-13"]');
	var owlMain15 = $('[data-item="slider-main-14"]');
	var owlMain16 = $('[data-item="slider-main-15"]');
	var owlMain17 = $('[data-item="slider-main-16"]');
	var owlMain18 = $('[data-item="slider-main-17"]');
	var owlMain19 = $('[data-item="slider-main-18"]');
	var owlMain20 = $('[data-item="slider-main-19"]');
	var owlMain21 = $('[data-item="slider-main-20"]');
	var owlMain22 = $('[data-item="slider-main-21"]');
	var owlMain23 = $('[data-item="slider-main-22"]');
	var owlMain24 = $('[data-item="slider-main-23"]');
	var owlMain25 = $('[data-item="slider-main-24"]');
	var owlMain26 = $('[data-item="slider-main-25"]');
	var owlMain27 = $('[data-item="slider-main-26"]');
	var owlMain28 = $('[data-item="slider-main-27"]');
	var owlMain29 = $('[data-item="slider-main-28"]');
	var owlMain30 = $('[data-item="slider-main-29"]');
	var owlMain31 = $('[data-item="slider-main-30"]');

	var options = {
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
		],
		dots: true,
	}
	owlMain2.owlCarousel(options);
	owlMain3.owlCarousel(options);
	owlMain4.owlCarousel(options);
	owlMain5.owlCarousel(options);
	owlMain6.owlCarousel(options);
	owlMain7.owlCarousel(options);
	owlMain8.owlCarousel(options);
	owlMain9.owlCarousel(options);
	owlMain10.owlCarousel(options);
	owlMain11.owlCarousel(options);
	owlMain12.owlCarousel(options);
	owlMain13.owlCarousel(options);
	owlMain14.owlCarousel(options);
	owlMain15.owlCarousel(options);
	owlMain16.owlCarousel(options);
	owlMain17.owlCarousel(options);
	owlMain18.owlCarousel(options);
	owlMain19.owlCarousel(options);
	owlMain20.owlCarousel(options);
	owlMain21.owlCarousel(options);
	owlMain22.owlCarousel(options);
	owlMain23.owlCarousel(options);
	owlMain24.owlCarousel(options);
	owlMain25.owlCarousel(options);
	owlMain26.owlCarousel(options);
	owlMain27.owlCarousel(options);
	owlMain28.owlCarousel(options);
	owlMain29.owlCarousel(options);
	owlMain30.owlCarousel(options);
	owlMain31.owlCarousel(options);

	$('ul.tabs .tab-link').click(function(e){
		e.preventDefault();
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs .tab-link').removeClass('active');
		$('.slider-block').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
		//$(this).parent('.has-inner').find('a').addClass('active');
	});
	

	var form = $('[data-form="send"]');
	form.validator();
	send();
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});




	var scroll_r = $(this).scrollTop();
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
});
function menuTop() {
	if ( $(this).scrollTop() > 30 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
	}
	else if ( $(this).scrollTop() <= 30 ) {
		$('.header').removeClass('fix-header');
	}
}
function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		//$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
		function hideForm() {
			$('#thx').modal('hide');
		}
		setTimeout(hideForm, 3000);
	});
}
