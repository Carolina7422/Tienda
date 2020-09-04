import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/UI/Header'
//import MainView from './views/MainView/'
import CupView from './Views/MainView/CupView'
import Phone from './Views/MainView/Phone'
import TshirtView from './Views/MainView/TshirtView'
import CreateItYourself from './Views/MainView/CreateItYourself'
import './main.css'

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route exact path="/fundas" component={Phone} />
        <Route exact path="/playeras" component={TshirtView} />
        <Route exact path="/tazas" component={CupView} />
        <Route exact path="/crealo-tu-mismo" component={CreateItYourself} />
      </Switch>
    </Router>

  );
}

//<MainView />

export default App;
