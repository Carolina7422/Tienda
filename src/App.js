import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/UI/Header'
import MainView from './views/MainView/index'
import './style'
//import { Title } from './assets/styles'

function App() {
  return (
    <>
      <Header />
      <MainView />
    </>
    //<Router>
    //    <Switch>

    //  </Switch>
    //</Router>

  );
}


export default App;
