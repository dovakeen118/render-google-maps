import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GoogleMap from "./GoogleMap"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/map">
          <GoogleMap />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
