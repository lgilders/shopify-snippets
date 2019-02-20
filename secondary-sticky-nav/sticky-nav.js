// Create One Page Nav version of secondary nav
// Requires https://github.com/davist11/jQuery-One-Page-Nav
function initSecondaryNav() {
    var nav = $('#secondary-nav');
    
    jQuery(nav).onePageNav({
        scrollThreshold: 0.1,
        scrollOffset: 56
    });
}

// Add stickiness to secondary nav
function initStickyNav() {
    var nav = $('#secondary-nav');
    var stop_position = $('#section-id'); // update with section id where secondary nav should stop being visible
    var top = $(nav).offset().top - parseFloat($(nav).css('margin-top').replace(/auto/, 0));
    var bottom = $(stop_position).offset().top;

    $(window).scroll(function (event) {
        // what the y position of the scroll is
        var y = $(this).scrollTop();
  
        // whether that's below the form
        if (y >= (top + 1400) ) { // update number to position where secondary nav should start appearing
          // if so, add the fixed class
            $(nav).addClass('fixed').trigger('classChange');
        } else {
          // otherwise remove it
          $(nav).removeClass('fixed');
        }

        if ( y >= (bottom + 850) ) { // update number to position where secondary nav should stop appearing
            $(nav).removeClass('fixed');
        }
    });
}

// Scroll horizontal secondary nav on click
function scrollNav() {
    var scrollArea = $('#secondary-nav .dynamic-tabs');
    var toScroll = $('.dynamic-tabs li');

    toScroll.each(function() {
        var self = $(this);

        $(self).on('click', function () {
            var leftOffset = self.offset().left - scrollArea.offset().left + scrollArea.scrollLeft();

            scrollArea.animate({ scrollLeft: leftOffset });
        });    
    });
};

// Scroll horizontal secondary nav on update
function scrollNavView() {
    var scrollArea = $('#secondary-nav .dynamic-tabs');
    var toScroll = $('.dynamic-tabs li');

    toScroll.each(function() {
        var self = $(this);

        $(self).on('addClass', function() {
            var leftOffset = self.offset().left - scrollArea.offset().left + scrollArea.scrollLeft();

            scrollArea.animate({ scrollLeft: leftOffset });
        });
    });
};


// Trigger behaviors for secondary nav
$(document).ready(function() {
    initSecondaryNav();
    initStickyNav();
    scrollNav();
    scrollNavView();
});