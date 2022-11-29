function sendForm(){
    const queryString = window.location.search;
    document.location.href = ('objavaForma.html' + queryString);
}

function formLoad(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var formType = urlParams.get('type');

    switch(formType){
        case 'band':
            console.log("popunjava formu za bend");
            document.getElementById('bendP').classList.toggle('hidden');
        break;

        case 'event':
            console.log("popunjava formu za dogadjaj");
            document.getElementById('dogP').classList.toggle('hidden');
        break;

        case 'collab':
            console.log("popunjava formu za saradnju");
            document.getElementById('saradnjaP').classList.toggle('hidden');
        break;

        case 'sale':
            console.log("popunjava formu za prodaju");
            document.getElementById('prodajaP').classList.toggle('hidden');
        break;
    }

    var markerLat = urlParams.get('markerLat');
    var markerLng = urlParams.get('markerLng');
    console.log('marker at ' + markerLat + 'lat, ' + markerLng + 'lng');
}

function initMap() {
    var formType;
            const srbija = { lat: 44.0165, lng: 21.0059 };
                    const map = new google.maps.Map(
                    document.getElementById("map"),{
                        zoom: 7,
                        center: srbija,
                        styles: 
                        [
                        {
                            "featureType": "poi.business",
                            "elementType": "labels.text",
                            "stylers": [
                            {
                                "visibility": "off"
                            }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "labels.text.fill",
                            "stylers": [
                            {
                                "visibility": "off"
                            }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                            {
                                "visibility": "off"
                            }
                            ]
                        }
                        ]
                    }
                    );

                    map.addListener('click', function(e) {
                        placeMarker(e.latLng, map);
                    });

                    var marker = new google.maps.Marker({
                        map: map
                    });

                    var marker2 = new google.maps.Marker({
                        map: map, 
                        position: new google.maps.LatLng(20, 40),
                        icon: 'bendMarker.png'
                    });
                    const infowindow2 = new google.maps.InfoWindow({
                        content: `<a href="lokacija.html">TESTIRANJE</a>`,
                    });

                    marker2.addListener("click", () =>{
                        infowindow2.open({
                            anchor: marker2,
                            map
                        });
                    });
                    

                    var marker3 = new google.maps.Marker({
                        map: map, 
                        position: new google.maps.LatLng(10, 5),
                        icon: 'dogadjajMarker.png'
                    });

                    function placeMarker(position, map) { //click to put marker
                        if (marker) { //if marker exists, set the position and icon        
                            switch(document.querySelector('input[name="pinModeType"]:checked').id){
                                case 'bandRadio':
                                    marker.setIcon('bendMarker.png');
                                    formType = ('band');
                                break;
                                case 'eventRadio':
                                    marker.setIcon('dogadjajMarker.png');
                                    formType = ('event');
                                break;
                                default:
                                    marker.setIcon('bendMarker.png');
                                break;
                            }
                            marker.setPosition(position);
                        } else { //if marker doesnt exist, make one with the appropriate data
                            switch(document.querySelector('input[name="pinModeType"]:checked').id){
                                case 'bandRadio':
                                    marker = ({
                                    position: position,
                                    map: map,
                                    icon: 'bendMarker.png'
                                    });
                                break;

                                case 'eventRadio':
                                    marker = ({
                                    position: position,
                                    map: map,
                                    icon: 'dogadjajMarker.png'
                                    });
                                break;
                        }      
                    }
                    window.history.replaceState(null, null, "?markerLat=" + marker.getPosition().lat() + "&markerLng=" + marker.getPosition().lng() + "&type=" + formType);
                }
        }

        window.initMap = initMap;