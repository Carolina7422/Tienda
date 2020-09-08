import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import MainView from './Views/MainView/'
import CupView from './Views/CupView'
import PhoneProduct from './Views/PhoneProducts'
import TshirtView from './Views/TshirtView'
import CreateItYourself from './Views/CreateItYourself'

import './main.css'

function App () {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/fundas" component={PhoneProduct} />
        <Route exact path="/playeras" component={TshirtView} />
        <Route exact path="/tazas" component={CupView} />
        <Route exact path="/crealo-tu-mismo" component={CreateItYourself}/>
      </Switch>
    </Router>
  )
}

export default App
