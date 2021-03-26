var MyMap;
mapboxgl.accessToken = "pk.eyJ1IjoiZnJvaWxhbmVucmlxdWV6MyIsImEiOiJja21xNjU3bWQxZ202MnBsd3lqaXZjOHpmIn0.qKVFhoneRnyPf5fAlM_rzQ";

MyMap = initMap("myMapDiv");

function addAddress(){
    let address = document.getElementById('inputAddress').value;
    drawMarkFromAddress(address, MyMap);
}


//Initialize map
function initMap (idDiv) {
    let map = new mapboxgl.Map({ //Create new mapbox object
      container: idDiv, 
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-3, 40], // starting position [lng, lat]
      zoom: 7, // starting zoom
    });
    map.markers = [];
    console.log("Map initialized");
    return map;
  };
  
//Add a marker to the map, given the longitude and latitude of the address.
  const addMark = (lat, lng, map) => {
    let mark = new mapboxgl.Marker().setLngLat([lat, lng]).addTo(map);
  
    map.markers.push(mark);
  
    return mark;
  };

  const drawMarkFromAddress = (address, map) => {
    let url = createURLApiCall(address);
  
    axios
    .get(url)
    .then(response => {
        let coordinates = response.data.features[0].center;
        addMark(coordinates[0], coordinates[1], map);
        
        map.flyTo({
            center: [
                coordinates[0],
                coordinates[1]
            ],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        
    })
    .catch( errorThrown =>{
        console.log(errorThrown);
    })


  };
  
// Create endpoint for url api call
  function createURLApiCall(address) {
    var route = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    var addressUrl = address.replaceAll(" ", "%20").toLowerCase() + ".json";
  
    let autocomplete = "true";
    //let country = "es";
    let language = "es";
  
    let params =
      "?access_token=" + mapboxgl.accessToken +
      "&autocomplete=" + autocomplete +
      //"&country=" + country +
      "&language=" + language;
  
    return route + addressUrl + params;
  }
  
  const removeAllMarks = (map) => {
    if (map.markers != null) {
      for (currentMarker of map.markers) {
        currentMarker.remove();
      }
    }
  };
  

  