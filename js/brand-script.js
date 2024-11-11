$(document).ready(function () {

    // Add menu toggle functionality
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
    // Add hover effects
    $('.grid-item').hover(
        function () {
            $(this).find('img').css('transform', 'scale(1.05)');
            $(this).find('img').css('transition', 'transform 0.3s ease');
        },
        function () {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );

    // Animate items on scroll
    $(window).scroll(function () {
        $('.grid-item').each(function () {
            const itemTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (itemTop < windowBottom) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });

    // Initialize items with opacity 0 and translation
    $('.grid-item').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.5s ease'
    });

    // Trigger scroll once to show initial items
    $(window).trigger('scroll');
});