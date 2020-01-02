import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import Login from "./views/Pages/Login"
import Register from "./views/Pages/Register"

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
          </Switch>
      </HashRouter>
    )
  }
}

export default App;
