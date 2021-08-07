const line_brown = document.querySelector('.line-brown');

const observerLine = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('line-animation');
      }
    });
});

observerLine.observe(line_brown);


async function initMap() {
    const infoWindow = new google.maps.InfoWindow();

    const style =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                  { visibility: "off" }
            ]
        }
    ];

    const centerLat = (24.890025975982642 + 24.890025975982642)/2 + 0.0075;
    const centerLng =(91.85753658955227 + 91.87888628736793)/2; 
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: centerLat, lng: centerLng},
        zoom: 14,
        styles: style,
        mapTypeId: 'terrain'
    });

    const jalalabadIcon = {
        url: "http://facilityregistry.dghs.gov.bd/img/bangladesh_govt_logo.png",
        scaledSize: new google.maps.Size(40,40), // scaled size
    }

    const jalalabadMarker = new google.maps.Marker({
        position: {lat: 24.89901170559273, lng: 91.85753658955227},
        map: map,
        title: `Jalalabad Clinic`,
        icon: jalalabadIcon,
        optimized: false,
        }
    );

    // adding event listeners for the start and end markers
    jalalabadMarker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent("Jalalabad Clinic");
        infoWindow.open(jalalabadMarker.getMap(), jalalabadMarker);
    });  


    const popularIcon = {
        url: "../images/popularLogo.gif", // url
        scaledSize: new google.maps.Size(30,40), // scaled size
    };

    const popularMarker = new google.maps.Marker({
        position: {lat: 24.890025975982642, lng: 91.87888628736793},
        map: map,
        title: `Popular Medical Centre and Hospital`,
        icon: popularIcon,
        optimized: false,
        }
    );

    // adding event listeners for the start and end markers
    popularMarker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent("Popular Medical Centre and Hospital");
        infoWindow.open(popularMarker.getMap(), popularMarker);
    });  



}

google.maps.event.addDomListener(window, 'load', initMap);