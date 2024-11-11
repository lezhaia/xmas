gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
    // Add visual elements
    for (let i = 0; i < 5; i++) {
        $('.hero').append('<div class="visual-element"></div>');
    }

    // Randomly position visual elements
    $('.visual-element').each(function () {
        let randomX = Math.random() * 100;
        let randomY = Math.random() * 100;
        $(this).css({
            'left': `${randomX}%`,
            'top': `${randomY}%`,
            'transform': `scale(${Math.random() * 2 + 1})`
        });
    });

    // Animate hero elements
    gsap.to('.hero h1', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5
    });

    gsap.to('.hero .date', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7
    });

    gsap.to('.hero .location', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.9
    });

    gsap.to('.hero .tags', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.1
    });

    $('.scroll-link').click(function (e) {
        e.preventDefault();

        // Close the menu
        $('.menu-btn').removeClass('active');
        $('.menu').removeClass('active');

        // Get the target section
        const target = $($(this).attr('href'));

        // Smooth scroll to target
        $('html, body').animate({
            scrollTop: target.offset().top -
                20 // Added 20px offset for better visibility
        }, 800);
    });

    // Animate visual elements
    function animateElements() {
        $('.visual-element').each(function () {
            gsap.to($(this), {
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                duration: Math.random() * 5 + 5,
                ease: "none",
                repeat: -1,
                yoyo: true
            });
        });
    }

    animateElements();

    // Menu toggle
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    // Scroll to top functionality
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top').addClass('visible');
        } else {
            $('.scroll-top').removeClass('visible');
        }
    });

    $('.scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Image card hover animation
    $('.image-card').hover(
        function () {
            gsap.to($(this).find('img'), {
                scale: 1.05,
                duration: 0.3
            });
            gsap.to($(this).find('.image-title'), {
                y: -5,
                duration: 0.3
            });
        },
        function () {
            gsap.to($(this).find('img'), {
                scale: 1,
                duration: 0.3
            });
            gsap.to($(this).find('.image-title'), {
                y: 0,
                duration: 0.3
            });
        }
    );

    // Scroll animations
    gsap.from('.info-section', {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: '.info-section',
            start: 'top 80%'
        }
    });

    gsap.from('.image-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.image-grid',
            start: 'top 80%'
        }
    });

    // Hover effects for menu items
    $('.menu-section li').hover(
        function () {
            gsap.to($(this), {
                x: 10,
                duration: 0.3
            });
        },
        function () {
            gsap.to($(this), {
                x: 0,
                duration: 0.3
            });
        }
    );

    $('.menu-section li a').hover(
        function () {
            gsap.to($(this), {
                x: 10,
                duration: 0.3
            });
        },
        function () {
            gsap.to($(this), {
                x: 0,
                duration: 0.3
            });
        }
    );
});