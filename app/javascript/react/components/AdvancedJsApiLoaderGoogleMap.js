import React, { useEffect, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

import MapSearch from "./MapSearch"
import ResultList from "./ResultList"

const AdvancedJsApiLoaderGoogleMap = (props) => {
  // may need to comment out script in views/layout/application.html

  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState("")
  
  const loader = new Loader({
    apiKey: "AIzaSyBraMYwUbKzwtWbXX2s4r4ENgPHJ32f28o",
    version: "weekly",
    libraries: ["places"]
  });

  useEffect(() => {
    setError("")
    loader.load().then(() => {
      const boston = { lat: 42.361, lng: -71.057 };
      
      const request = {
        query: searchQuery,
        location: boston,
        radius: "500"
      };

      const map = new google.maps.Map(document.getElementById("map"), {
        center: boston,
        zoom: 11,
      });

      const service = new google.maps.places.PlacesService(map);
      if (searchQuery) {
        service.textSearch(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setSearchResults(results)
            results.forEach((result) => {
              const resultContent = 
                `<p>${result.name}</p>` +
                `<p>${result.formatted_address}</p>`
              
              const infowindow = new google.maps.InfoWindow({
                content: resultContent,
                ariaLabel: result.name,
              });
              
              const marker = new google.maps.Marker({
                position: new google.maps.LatLng(result.geometry.location.lat(), result.geometry.location.lng()),
                map: map,
              });
    
              marker.addListener("click", () => {
                infowindow.open({
                  anchor: marker,
                  map,
                });
              });
            })
    
            map.setCenter(results[0].geometry.location);
          } else {
            setError("No results found, please try again.")
          }
        })
      }
    });
  }, [searchQuery])


  return (
    <>
      <h1>Advanced JS API Loader Google Maps</h1>
      <ul>
        <li>Should comment out script in application.html.erb which declares Google Maps loader for other maps</li>
        <li>Displaying a map around Boston, ready to search based on user request in the search bar</li>
        <li>Will display list of found results, multiple map markers, and map markers are clickable for more info</li>
      </ul>
      <MapSearch setSearchQuery={setSearchQuery} />
      <p className="error">{error}</p>
      <div id="map" style={{height:400}}></div>
      <ResultList searchResults={searchResults} />
    </>
  )
}

export default AdvancedJsApiLoaderGoogleMap