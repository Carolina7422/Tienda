import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/UI/Header'
// import MainView from './views/MainView/'
import CupView from './Views/CupView'
import PhoneProduct from './Views/PhoneProducts'
import TshirtView from './Views/TshirtView'
import CreateItYourself from './Views/CreateItYourself'
import './main.css'

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route exact path="/fundas" component={PhoneProduct} />
        <Route exact path="/playeras" component={TshirtView} />
        <Route exact path="/tazas" component={CupView} />
        <Route exact path="/crealo-tu-mismo" component={CreateItYourself} />
      </Switch>
    </Router>

  )
}

// <MainView />

export default App
