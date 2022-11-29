import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GoogleMap from "./GoogleMap"
import SimpleGoogleMap from "./SimpleGoogleMap"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/map" component={GoogleMap} />
        <Route exact path="/simple-map" component={SimpleGoogleMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
