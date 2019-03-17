function initMap() {
    const loc = { lat: 37.773972, lng: -122.431297 };
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 12,
        center: loc
    });
    const marker = new google.maps.Marker({ position: loc, map: map });
}

$('#navbar a, .btn').on('click', function(event) {
    if (this.hash != '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 75
            },
            800
        );
    }
});