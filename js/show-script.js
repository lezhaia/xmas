$(document).ready(function () {

    $('.menu-btn').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    // Sample event data - replace with your actual event data
    const events = {
        "11.09": [{
                title: "Event 1",
                time: "16:00-17:00",
                image: "images/b.png"
            },
            {
                title: "Event 2",
                time: "17:00-18:00",
                image: "images/b.png"
            },
            {
                title: "Event 3",
                time: "18:00-19:00",
                image: "images/b.png"
            },
            {
                title: "Event 3",
                time: "18:00-19:00",
                image: "images/b.png"
            },
            {
                title: "Event 3",
                time: "18:00-19:00",
                image: "images/b.png"
            }, {
                title: "Event 3",
                time: "18:00-19:00",
                image: "images/b.png"
            },
            {
                title: "Event 3",
                time: "18:00-19:00",
                image: "images/b.png"
            }
        ],
    };

    function displayEvents(date) {
        const eventsList = events[date];
        $('.events-grid').empty();

        eventsList.forEach(event => {
            $('.events-grid').append(`
                <div class="event-card">
                    <img src="${event.image}" alt="${event.title}" class="event-image">
                    <div class="event-info">
                        <div class="event-time">${event.time}</div>
                        <h3 class="event-title">${event.title}</h3>
                    </div>
                </div>
            `);
        });
    }

    // Initial display
    displayEvents("11.09");

    // Date button click handlers
    $('.date-btn').click(function () {
        $('.date-btn').removeClass('active');
        $(this).addClass('active');
        displayEvents($(this).text());
    });
});