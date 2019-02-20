// Requires inclusion of slick slider; see this [documentation](http://kenwheeler.github.io/slick/) for more information. 
$(document).ready(() => {
    var $carousel = $('#logo-carousel'); // Update selector to match DOM

    initCarousel();
      
  	$(window).on('orientationchange resize', function() {
        initCarousel();
    });

  	function initCarousel() {
        $carousel.each(function() { 
            if (!$(this).hasClass('slick-initialized')) {
                $(this).slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: false,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    centerMode: true,
                    centerPadding: '90px',
                    responsive: [
                        {
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: "unslick"
                        }
                    ]
                });
            }
        })
    }
});