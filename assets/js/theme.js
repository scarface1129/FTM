(function($) {
    'use strict'; 	
	
    /*---WOW active js ---- */
    new WOW().init();
	
    /*---- scrollUp----- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });	
    /*---- .scrollUp----- */

    /*---- Loader ----------*/
    $(window).on("load", function () {
        $('.loader').fadeOut('slow',function(){
            $(this).remove();
        });
    });
    /*---- .Loader ----------*/

    /* Slider Js */
    $(document).ready(function(){
        $('.customer-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 20,
            rewind: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">','<i class="fa fa-angle-right" aria-hidden="true">'],
            autoplay: true,
            autoplayTimeout: 3000,
            animateOut: 'fadeOut',
            items: 1,
            responsiveClass:true,
            responsive:{
                0: {
                    items:1
                },
                576: {
                    items:2
                },
                992: {
                    items:3
                }
            }
        })

        $('.blog-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 20,
            rewind: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">','<i class="fa fa-angle-right" aria-hidden="true">'],
            autoplay: true,
            autoplayTimeout: 3000,
            animateOut: 'fadeOut',
            items: 1,
            responsiveClass:true,
            responsive:{
                0: {
                    items:1
                },
                768: {
                    items:2
                },
                1200: {
                    items:3
                }
            }
        })

        $('.team-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 20,
            rewind: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">','<i class="fa fa-angle-right" aria-hidden="true">'],
            autoplay: true,
            autoplayTimeout: 3000,
            animateOut: 'fadeOut',
            items: 1,
            responsiveClass:true,
            responsive:{
                0: {
                    items:1
                },
                300: {
                    items:2
                },
                576: {
                    items:3
                },
                992: {
                    items:4
                },
                1200: {
                    items:5
                }
            }
        })

         $('.provide-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 20,
            rewind: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">','<i class="fa fa-angle-right" aria-hidden="true">'],
            autoplay: true,
            autoplayTimeout: 3000,
            animateOut: 'fadeOut',
            items: 1,
            responsiveClass:true,
            responsive:{
                0: {
                    items:1
                },
                300: {
                    items:2
                },
                501: {
                    items:3
                },
                992: {
                    items:4
                },
                1200: {
                    items:5
                },
                1400: {
                    items:6,
                    loop: false
                }
            }
        })
    })
    /* .Slider Js */

    /* Counter */
    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end:    100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options );

        var thisElement = $(this);

        $({count: settings.start}).animate({count: settings.end}, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };

    $('#number1').jQuerySimpleCounter({end: 257,duration: 3000});
    $('#number2').jQuerySimpleCounter({end: 676,duration: 3000});
    $('#number3').jQuerySimpleCounter({end: 233,duration: 3000});
    /* .Counter */

    /* Equal height */
    var item_max_height;
    function set_equal_height(class_id_name){
        if(class_id_name != ""){
            item_max_height = 0;
            $(class_id_name).each(function(){
               if ($(this).height() > item_max_height) { item_max_height = $(this).height(); }
            });
            // console.log(class_id_name + ' ' + item_max_height);
            $(class_id_name).height(item_max_height);
        }
    }
    function resize_item(){
        set_equal_height(".crypto_solution_desc");
        set_equal_height(".blog_description");
    }
    $(document).ready(function(){
        resize_item();
    });
    $(window).resize(function(){
        resize_item();
    });
    /* .Equal height */

    /* Sticky Header */
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('fixed-header');
        }
        else {
            $('header').removeClass('fixed-header');
        }
    });
    /* .Sticky Header */

    /* Responsive Menu */
    $("#show-themability_megamenu").click(function() {        
        $('.cryptco_menu .main-menu-outer').toggleClass('main-menu-active');
        $('body').addClass('active');
    });

     $(".cryptco_menu .menu_title i").click(function() {        
        $('.cryptco_menu .main-menu-outer').removeClass('main-menu-active');
        $('body').removeClass('active');
    });
    /* .Responsive Menu */
	
	/* Contact Form */
	if (window.location.href.indexOf('submitted=true') !== -1) {
		$('.submitted').show();
	}
	/* .Contact Form */

})(jQuery);