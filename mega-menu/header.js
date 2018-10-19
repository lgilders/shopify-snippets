// Add to theme.js

// NAV OVERLAY BEHAVIOR
$('nav ul.primary li.has-submenu').on('mouseenter', () => { $('body').addClass('nav-open'); });
$('nav ul.primary li.has-submenu').on('mouseleave', () => { $('body').removeClass('nav-open'); });

// MOBILE MENU ACCORDION BEHAVIOR
$('.accordion-group').each(function() {
  $(this).on('click', function() {
    if ($(this).hasClass('open-accordion')) {
      $(this).removeClass('open-accordion');
      const $containerElement = $(this).find('.item-container');
      $containerElement.css('max-height', '0');
    } else {
      const $containerElement = $(this).find('.item-container');
      const actualHeight = $containerElement.prop('scrollHeight');
      $containerElement.css('max-height', actualHeight);
      $(this).addClass('open-accordion');
    }
  });
});

// MOBILE MENU BEHAVIOR
const triggerMobileMenu = () => { $('nav#main-menu-mobile').toggleClass('active'); };
const displayMobileSearch = () => {
  window.setTimeout(() => {
    document.getElementById('mobile-search').focus();
  }, 100);
};

$('#mobile-menu-toggle').on('click', () => { triggerMobileMenu(); });

$('.backdrop').on('click', () => { triggerMobileMenu(); });

$('#mobile-search-link').on('click', () => {
  triggerMobileMenu();
  displayMobileSearch();
});


