import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MapIndex } from './MapIndex'
import AdvancedJsApiLoaderGoogleMap from "./AdvancedJsApiLoaderGoogleMap"
import SimpleJsApiLoaderGoogleMap from "./SimpleJsApiLoaderGoogleMap"
import ReactGoogleMap from "./ReactGoogleMap"
import VanillaGoogleMap from "./VanillaGoogleMap"
// import ReactWrapper from "./ReactWrapper"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MapIndex} />
        <Route exact path="/vanilla-google-map" component={VanillaGoogleMap} />
        <Route exact path="/simple-js-loader-map" component={SimpleJsApiLoaderGoogleMap} />
        <Route exact path="/advanced-js-loader-map" component={AdvancedJsApiLoaderGoogleMap} />
        <Route exact path="/react-google-map" component={ReactGoogleMap} />
        {/* <Route exact path="/react-wrapper" component={ReactWrapper} /> */}
      </Switch>
    </BrowserRouter>
  )
}
