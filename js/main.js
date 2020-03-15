//  scroll(function()

$(window).scroll(function() {
    if ($(this).scrollTop() > 250){
        $('.silvery-header').addClass("sticky");
    }
    else{
        $('.silvery-header').removeClass("sticky");
    }
});




// $(document).click

$('.search-icon').on('click', function(){

    $(document).click(function(event) {
        if (!$(event.target).is(".form-search") && !$(event.target).is(".form-input")) {

            $(".form-search").addClass('form-hide');
        }
        else {
            $(".form-search").removeClass('form-hide');
        }
    });

    $(".form-search").toggleClass('form-hide');
    return false;
});



//animation fadeInUP

jQuery(function($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});




// click categories

$(".scrollto").click(function(event) {
    event.preventDefault();

    var defaultAnchorOffset = 0;

    var anchor = $(this).attr('data-attr-scroll');

    var anchorOffset = $('#'+anchor).attr('data-scroll-offset');
    if (!anchorOffset)
        anchorOffset = defaultAnchorOffset;

    $('html,body').animate({
        scrollTop: $('#'+anchor).offset().top - anchorOffset
    }, 500);
});

