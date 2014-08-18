$(function() {

	$(window).scroll(function() {
		var position = $(window).scrollTop();

		if (position > 0 && position < 400) {

			$('h1.site-title a').css({ opacity: '1'});

			$('.pavalancheImage').css({ top: '2000'});

		} else if (position > 400 && position < 700) {

			$('h1.site-title a').css({ opacity: '0'});

			$('.pavalancheImage').css({ top: '0'});

			$('.takecareImage').css({ left: '4000'});
			$('.takecareInfo').css({ left: '-2500'});

		} else if (position > 700 && position < 1100) {

			$('.takecareImage').css({ left: '0'});

		} else if (position > 1100 && position < 1600) {

			$('.bandinfo').css({ left: '49%' });
			$('.bandphoto').css({ left: '0' });

		}
	});

//DISCOGRAPHY PANELS
	
	var $avInfo = $('.pavalancheInfo p');
	
	$('.pavalancheInfo').on('click', function() {
		$(this).toggleClass('pavSlide');
	});

	$('.pavalanche').hover(function() {
		$('.pavalancheImage').toggleClass('pavHover');
	});

	$('.takecareImage').hover(function() {
		$(this).toggleClass('tcHover');
	});

	$('.takecareInfo').on('click', function() {
		$(this).toggleClass('tcSlide');
	});

	$('.aboutInfo').on('click', function() {
		$(this).toggleClass('aboutSlide');
	});
	$('.contactInfo').on('click', function() {
		$('.contactInfo, .contactInfo2').toggleClass('contactSlide');
	});
	$('.contactInfo2').on('click', function() {
		$(this).toggleClass('contactSlide2');
	});

//HOME BANNER SHAPES
	var $shapes = $('.hexagonWrap, .hexagonWrap-2, .hexagonWrap-3, .hexagonWrap-4, .hexagonWrap-5, .hexagonWrap-6, .hexagonWrap-7, .hexagonWrap-8, .hexagonWrap-9, .hexagonWrap-10, .hexagonWrap-11');

	$shapes.mouseenter(function() {
		$(this).addClass('visible');
		$(this).addClass('flash');
		$(this).css('transform','scale(1.15)');
	});
	$shapes.mouseleave(function() {
		$(this).removeClass('visible');
		$(this).removeClass('flash');
		$(this).css('transform','scale(0.85)');
	});

	//SLIDE TOGGLE WIDGET LISTS
	var $recentPosts = $('#recent-posts-2 ul li');
	var $recentComments = $('#recent-comments-2 ul li');
	var $archives = $('#archives-2 ul li');
	var $categories = $('#categories-2 ul li');
	var $meta = $('#meta-2 ul li');

	$recentPosts.hide();
	$('#recent-posts-2 h1').on('click', function() {
			$recentPosts.slideToggle(500);
	});

	$recentComments.hide();
	$('#recent-comments-2 h1').on('click', function() {
		$recentComments.slideToggle(500);
	});

	$archives.hide();
	$('#archives-2 h1').on('click', function() {
		$archives.slideToggle(500);
	});
	
	$categories.hide();
	$('#categories-2 h1').on('click', function() {
		$categories.slideToggle(500);
	});

	$meta.hide();
	$('#meta-2 h1').on('click', function() {
		$meta.slideToggle(500);
	});

});








