import React from "react"
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"

const ReactGoogleMap = (props) => {
  // may need to comment out script in views/layout/application.html

  const boston = { lat: 42.361, lng: -71.057 };
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={boston}
    >
      <Marker
        position={boston}
      >
      </Marker>
    </GoogleMap>
  ));

  return (
    <>
      <h1>React Google Maps</h1>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBraMYwUbKzwtWbXX2s4r4ENgPHJ32f28o&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "90%" }} />}
        containerElement={<div style={{ height: "300px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </>
  )
}

export default ReactGoogleMap