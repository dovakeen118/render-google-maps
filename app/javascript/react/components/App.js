import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MapIndex from './MapIndex'
import JsApiLoaderGoogleMap from "./JsApiLoaderGoogleMap"
import SimpleJsApiLoaderGoogleMap from "./SimpleJsApiLoaderGoogleMap"
import ReactGoogleMap from "./ReactGoogleMap"
import VanillaGoogleMap from "./VanillaGoogleMap"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MapIndex} />
        <Route exact path="/vanilla-google-map" component={VanillaGoogleMap} />
        <Route exact path="/simple-map" component={SimpleJsApiLoaderGoogleMap} />
        <Route exact path="/js-map" component={JsApiLoaderGoogleMap} />
        <Route exact path="/react-google-map" component={ReactGoogleMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
