(function($) {
    $(document).ready(function() {
        $('#full-calendar').fullCalendar({
            googleCalendarApiKey: 'AIzaSyCiuiLNoFX1sBHzWOQ2b2zx0TrIQV4aHhw',
            eventSources: [
                {
                    googleCalendarId: 'hackersofumass@gmail.com'
                },
                {
                    url: 'http://cal.mlh.io'
                }
            ],
            header: {
                left: 'title',
                center: '',
                right: 'prev,next'
            }
        });
    });
})(jQuery);
