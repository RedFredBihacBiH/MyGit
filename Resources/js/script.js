$(document).ready(function () {
	/* PRIMJER PROMJENE BOJE NA KLIK
	$('h1').click(function () {
		$(this).css('background-color', '#ff0000');
	});
	*/

	/* LINK za waypoints koji pokreće funkciju kad skrolamo element
	
	http://imakewebthings.com/waypoints/guides/jquery-zepto/
	
	kopira se u sticky kod
	
	var waypoints = $('#handler-first').waypoint(function(direction) {
		  notify(this.element.id + ' hit 25% from top of window') 
	}, {
		offset: '25%'
	})
	*/

	/* STICKY NAVIGATION */
	$('.js--section-features').waypoint(function (direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});

	/* SCROLING EFECTS */

	/*Button I'm hungry go to section-plans*/
	$('.js--scroll-to-plan').click(function () {
		$('html, body').animate({
			scrollTop: $('.js--section-plans').offset().top
		}, 2000);
	});

	/*Button Show me more go to section-features*/
	$('.js--scroll-to-start').click(function () {
		$('html, body').animate({
			scrollTop: $('.js--section-features').offset().top
		}, 2000);
	});

	/*logo-black in sticky go to header ali može i dole način
	$('.js--logo-black').click(function () {
		$('html, body').animate({
			scrollTop: $('.js--header').offset().top
		}, 2000);
	});*/

	/* NAVIGATION SCROLL */
	/* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 2000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

	/* ANIMATION ON SCROLL */

	/*Animacija za prvu sekciju*/
	$('.js--wp-1').waypoint(function (direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	/*Animacija za sekciju u kojoj mobitel ulazi sa lijeve a koraci sa desne strane*/
	$('.js--wp-2').waypoint(function (direction) {
		$('.js--wp-2').addClass('animated fadeInLeftBig');
	}, {
		offset: '50%'
	});
	$('.js--wp-3').waypoint(function (direction) {
		$('.js--wp-3').addClass('animated fadeInRightBig');
	}, {
		offset: '50%'
	});
	/*Animacija za cities*/
	$('.js--wp-4').waypoint(function (direction) {
		$('.js--wp-4').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	/*Animacija za pro plan*/
	$('.js--wp-5').waypoint(function (direction) {
		$('.js--wp-5').addClass('animated zoomIn');
	}, {
		offset: '50%'
	});

	/* 7.MOBILNA NAVIGACIJ */

	$('.js--nav-icon').click(function () {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i')
		/*ovo je potrebno samo za otvori zatvori nav mobilni*/
		nav.slideToggle(200);
		/*ovo je potrebno samo za otvori zatvori nav mobilni*/

		/*ako icona ima klasu za moblini-nav(ion-navicon-round) zamjnei je sa (ion-close-round) a obrisi (remove ion-navicon-round) */
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}

	});

	/* MAPS */
	var map = new GMaps({
		div: '.map',
		lat: 44.8199597,
		lng: 15.865,
		zoom: 17
	});
	map.addMarker({
		lat: 44.8199597,
		lng: 15.865,
		title: 'JU MSMS',
		infoWindow: {
			content: '<p>JU Mašinsko-saobraćajna</p>'
		}
	});
});
