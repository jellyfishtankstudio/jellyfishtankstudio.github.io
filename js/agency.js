/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 */

// $ for page scrolling feature - requires $ Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function () {
    // init Magnific popup
    $('a.popup').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
        titleSrc: 'alt',
        cursor: 'mfp-zoom-out-cur'
    });

    // remove title on img hover
    var imgTitle;
    $("img, a").on('hover', function () {
        imgTitle = $(this).attr("title");
        $(this).removeAttr("title");
    }, function () {
        $(this).attr("title", imgTitle);
    });
});

$(window).load(function () {
    // masonry gallery
    var $masonry_gallery = $('.masonry-gallery.gallery');
    if ($masonry_gallery.length > 0) {

        $masonry_gallery.each(function (index, element) {
            var $masonry_items = $(element).find('.gallery-item');

            // set masonry layout
            $(element).isotope({
                masonry: { columnWidth: $(element).find('.gallery-item')[0] },
                itemSelector: '.gallery-item'
            });
            $(element).isotope('layout');

            // filtering
            $('#gallery-filter li a').on('click', function () {
                $('#gallery-filter li a').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $masonry_gallery.isotope({ filter: selector });
                return false;
            });

            // changing layout
            $('#grid-changer li a').on('click', function () {
                $('#grid-changer li a').removeClass('active');
                $(this).toggleClass('active');

                $masonry_items.removeClass('col-3');
                $masonry_items.removeClass('col-4');
                $masonry_items.removeClass('col-5');
                $masonry_items.toggleClass($(this).closest('li').attr('class'));
                $masonry_gallery.isotope('layout');
            });

        });
    }
});