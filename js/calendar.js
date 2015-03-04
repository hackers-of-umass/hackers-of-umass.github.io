$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyCiuiLNoFX1sBHzWOQ2b2zx0TrIQV4aHhw',
        eventSources: [
            {
                googleCalendarId: 'hackersofumass@gmail.com'
            }
        ]
    });
});
