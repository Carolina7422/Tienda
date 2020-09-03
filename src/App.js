import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/UI/Header'
//import MainView from './views/MainView/'
import CupView from './views/MainView/CupView'
import PhoneView from './views/MainView//PhoneView'
import TshirtView from './views/MainView/TshirtView'
import CreateItYourself from './views/MainView/CreateItYourself'
import './style'

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route exact path="/fundas" component={PhoneView} />
        <Route exact path="/playeras" component={TshirtView} />
        <Route exact path="/tazas" component={CupView} />
        <Route exact path="/crealo-tu-mismo" component={CreateItYourself} />
      </Switch>
    </Router>

  );
}

//<MainView />

export default App;
