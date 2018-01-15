$(function() {
});

	// Custom JS
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

	$(".accordion-item").on("click", function () {
		$(".accordion-item").removeClass("selected-item");
		$(this).toggleClass("selected-item");
		
	})

