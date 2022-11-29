import React, { useEffect, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

const GoogleMap = (props) => {
  const loader = new Loader({
    apiKey: "AIzaSyBraMYwUbKzwtWbXX2s4r4ENgPHJ32f28o",
    version: "weekly",
    libraries: ["places"]
  });

  loader.load().then(() => {
    const boston = { lat: 42.361, lng: -71.057 };
    
    const request = {
      query: "tatte",
      location: boston,
      radius: "500"
    };

    const map = new google.maps.Map(document.getElementById("map"), {
      center: boston,
      zoom: 11,
    });

    const service = new google.maps.places.PlacesService(map);
    service.textSearch(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((result) => {
          new google.maps.Marker({
            position: new google.maps.LatLng(result.geometry.location.lat(), result.geometry.location.lng()),
            map: map,
          });
        })

        map.setCenter(results[0].geometry.location);
      }
    })
  })

  return (
    <div id="map" style={{height:400}}></div>
  )
}

export default GoogleMap