// Add to theme.js

// STICKY NAV BEHAVIOR
theme.NavStick();

theme.NavStick = (() => {
  function init(){
    var $headerHeight = $('#shopify-section-header').height();
    var $navHeight = $('#nav-desktop').height();

    if( $(window).width() < 768 ){
      $navHeight = $('#header-mobile').height();
    }

    var $stickPoint = $headerHeight - $navHeight;
        
    if($(window).scrollTop() < $stickPoint) {
      $('body').removeClass('navStick');
    } else {
      $('body').addClass('navStick');
    }
  }

  init();

  $(window).on('resize scroll', () => {
    init();
  })
});
