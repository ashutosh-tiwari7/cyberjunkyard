$(function() {
	'use strict';

	var window_width = $(window).width(),
		window_height = window.innerHeight;

	$('.fullscreen').css('height', window_height);

	if (document.getElementById('default-select')) {
		$('select').niceSelect();
	}

	$('.toggle_icon').on('click', function() {
		$('body').toggleClass('open');
		$('#top_logo').toggleClass('d-none')
	});

	/*----------------------------------------------------*/
	/*  Magnific Pop up js
	/*----------------------------------------------------*/

	// for img popup //
    $(".portfolio-area").magnificPopup({
        delegate: '.img-popup',
        type: 'image',
        gallery: {
           enabled: true
       }
    });
	
	// home video //
	$('.video-play-button').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
	});

	// nice select //

	//$('select').niceSelect();
	
	/*----------------------------------------------------*/
    /* counter js
    /*----------------------------------------------------*/
    if(document.getElementById("project_counter")){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

	/*----------------------------------------------------*/
	/*  Brand carousel js
    /*----------------------------------------------------*/	
	$('.brand-carousel').owlCarousel({
		items: 4,
		// autoplay: 2500,
		loop: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			420: {
				items: 2
			},
			575: {
				items: 3
			},
			768: {
				items: 4
			},
			1200: {
				items: 4
			}
		}
	});

	/*----------------------------------------------------*/
	/*  Portfolio carousel js
    /*----------------------------------------------------*/	
	$('.active-gallery-carousel').owlCarousel({
		items: 2,
		// autoplay: 2500,
		loop: true,
		margin: 30,
		nav: true,
		navText:["<img src='/assets/images/prev.png'>","<img src='/assets/images/next.png'>"],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			420: {
				items: 1
			},
			575: {
				items: 2
			},
			768: {
				items: 1
			},
			1200: {
				items: 2
            },
            1680: {
				items: 3
			}
		}
	});


	/*----------------------------------------------------*/
	/*  Team carousel js
    /*----------------------------------------------------*/	
	$('.active-team-carusel').owlCarousel({
		items: 1,
		// autoplay: 2500,
		loop: true,
		dots: false,
		nav: true,
		navText:["<img src='/assets/images/prev.png'>","<img src='/assets/images/next.png'>"]
	});

	/*----------------------------------------------------*/
	/*  Testimonial carousel js
    /*----------------------------------------------------*/	
	$('.active-testi-carousel').owlCarousel({
		items: 1,
		// autoplay: 2500,
		loop: true,
		dots: false,
		nav: true,
		navText:["<img src='/assets/images/prev.png'>","<img src='/assets/images/next.png'>"]
	});

	
});
