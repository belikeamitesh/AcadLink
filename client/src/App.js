import React from 'react';
import './App.css';
import Home from './Home';
import Update from './components/Feed/Update';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';

function App() {
  return (
    <Router>
      <Switch>
        {!!localStorage.getItem('token') ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Route exact path="/" component={Login} />
        )}

        <Route exact path="/update" component={Update} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
