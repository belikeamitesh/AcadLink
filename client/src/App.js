import React from 'react';
import './App.css';
import Home from './Home';
import Update from './components/Feed/Update'
import { BrowserRouter as  Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/update" component={Update} />
    </Switch>  
 </Router> 
  );
}

export default App;
