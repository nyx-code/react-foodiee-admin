import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import Login from "./views/Pages/Login"
import Register from "./views/Pages/Register"
import Dashboard from "./views/Dashboard/"

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            <Route exact path="/" name="Register Page" render={props => <Dashboard {...props}/>} />
          </Switch>
      </HashRouter>
    )
  }
}

export default App;
