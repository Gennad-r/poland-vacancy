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
	$('.navigation-menu a, #up-to-top').bind('click', function(e) {
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

	//to top
	$(window).on("scroll", function () {
		if ( window.scrollY >= window.innerHeight * 0.8 ) {
				$('#up-to-top, #call-me').addClass('s-scrolled');
			} else {
				$('#up-to-top, #call-me').removeClass('s-scrolled');
			}
	});



});








function initMap() {
	var blueStyle = [
	{ "stylers": [ { "hue": "#052839" }, { "saturation": -20 } ] },
	{ "elementType": "labels.text.fill", "stylers": [ { "color": "#052839" } ] },
	{ "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" } ] },
	{ "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "color": "#052839" } ] },
	{ "featureType": "water", "stylers": [ { "color": "#052839" }, { "lightness": 40 }, { "saturation": -60 } ] },
	{ "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#052839" } ] },
	{ "featureType": "poi", "elementType": "geometry", "stylers": [ { "visibility": "off" } ] },
	{ "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#bfc9cc" }, { "visibility": "on" } ] },
	{ "featureType": "poi.business", "elementType": "geometry", "stylers": [ { "hue": "#052839" }, { "visibility": "on" } ] },
	{ "featureType": "poi.school", "elementType": "geometry", "stylers": [ { "hue": "#052839" }, { "visibility": "on" } ] },
	{ "featureType": "poi.medical", "elementType": "geometry", "stylers": [ { "hue": "#052839" }, { "visibility": "on" } ] },
	{ "featureType": "poi.government", "elementType": "geometry", "stylers": [ { "hue": "#052839" }, { "visibility": "on" } ] },
	{ "featureType": "landscape.natural", "elementType": "geometry", "stylers": [ { "hue": "#052839" } ] },
	{ "elementType": "geometry.stroke", "stylers": [{ "color": "#052839" },	{ "lightness": 70 }]},
	];
	var rabotaInfo = {lat: 49.9871, lng: 36.2544};
	var map = new google.maps.Map(document.getElementById('map-holder'), {
		zoom: 18,
		center: rabotaInfo,
		styles: blueStyle
	});
	var marker = new google.maps.Marker({
		position: rabotaInfo,
		map: map,
		title: "Мы тут!",
		icon: "../img/logo-gear-along.png"
	});
}
