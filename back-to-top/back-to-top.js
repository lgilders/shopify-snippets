// Requires jQuery
function backToTop() {
    var page = $('html, body');
    var backToTop = $('.js-back-to-top');

    $(backToTop).on('mousedown touchstart', function(event) {
        event.preventDefault();
        $(page).animate({
            scrollTop: '0px'
        }, 1000);
    });
};

// Init back-to-top behavior
$(document).ready(function() {
    backToTop();
});