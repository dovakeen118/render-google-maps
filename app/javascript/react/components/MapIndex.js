import React from "react"
import { Link } from "react-router-dom"

const MapIndex = (props) => {

  return (
    <div>
      <li><Link to="/vanilla-google-map">Vanilla Google Map</Link></li>
      <li><Link to="/simple-map">Simple JS API Loader Google Map</Link></li>
      <li><Link to="/js-map">JS API Loader Google Maps</Link></li>
      <li><Link to="/react-google-map">React Google Maps</Link></li>
    </div>
  )
}

export default MapIndex