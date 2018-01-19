$(function() {

	// Sliders
	$(".slider-01").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000
	});
	$(".slider-02").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000
	});
	$(".slider-03").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 7000
	});
	// Accordion
	$(".accordion-item").on("click", function () {
		$(".accordion-item").removeClass("selected-item");
		$(this).toggleClass("selected-item");
		
	})
	// Counter
	$('.vacancy-counter').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

	// hamburger menu
	$('.hamburger--elastic').click(function () {
			$(this).toggleClass("is-active");
			$("nav").toggleClass("clicked");
	});


	//scroll to
	$('.navigation-menu a').bind('click', function(e) {
		e.preventDefault(); // prevent hard jump, the default behavior
		// for mobile and hamburger menu
		$(".hamburger--elastic").removeClass("is-active");
		$("nav").removeClass("clicked");
		var target = $(this).attr("href") || $(this).attr("data"), // Set the target as variable
			pos = $(target).offset().top; // navigation panel heigth
		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').stop().animate({
			scrollTop: pos
		}, 600/*, function() {
				location.hash = target; //attach the hash (#jumptarget) to the pageurl
			}*/);

		return false;
	});
});
