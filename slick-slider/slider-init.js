import $ from 'jquery';
import sections from '@shopify/theme-sections';
import '../libraries/jquery-migrate-1.2.1.min';
import '../libraries/slick.min';

$(document).ready(() => {
    var $carousel = $('.carousel'); // Update selector to match DOM

    initCarousel();
      
  	$(window).on('orientationchange resize', function() {
        initCarousel();
    });

  	function initCarousel() {
        $carousel.each(function() { 
            if (!$(this).hasClass('slick-initialized')) {
                $(this).slick({
                    dots: true,
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: false,
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: "unslick"
                        }
                    ]
                });
            }
        })
    }
});
