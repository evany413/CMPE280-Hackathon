async function initMap(){
    const response = await fetch("./location.json");
    const data = await response.json();
    lat = data["locations"]["location"][10]["latitude"];
    long = data["locations"]["location"][10]["longitude"];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center:new google.maps.LatLng(lat,long)
    });

    for(var i=0;i<15;i++){
        var pos = {
            lat :data["locations"]["location"][i]["latitude"],
            lng :data["locations"]["location"][i]["longitude"]
        };
        var type = data["locations"]["location"][i]["type"];

        var marker = new google.maps.Marker({
          position: pos,
          animation: google.maps.Animation.DROP,
          map: map
        });

        if (type == "RetailLocation"){
          marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');

          var circle = new google.maps.Circle({
            strokeColor: '#64967d',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: '#b0ecf4',
            fillOpacity: 0.35,
            map: map,
            center: pos,
            radius: Math.sqrt(data["locations"]["location"][i]["$revenue"]) * 2
          });

        }
        else if (type == "Distribution Facility"){
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
        }
        else if (type == "Call Center"){
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
        }
        else if (type == "HeadQuarters"){
            marker.setIcon('https://maps.google.com/mapfiles/kml/paddle/wht-circle.png');
        }
    }
}
