import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./component/Home"
import LoginButton from './component/LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FavWatch from './component/FavWatch';
import Header from './component/Header';

export class App extends Component {
  render() {
    // const {isAuthenticated} = auth0.isAuthenticated();
    return (      
      <>
      {/* <LoginButton/> */}
        {/* @todo show login button and hide the list for unauthenticated users */}

        {/* @todo show logout button and show items list components for authenticated users */}
        <Header/>
        <Router>
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/favorate">
            <FavWatch/>
        </Route>
        </Switch>
        </Router>
        
      </>
    )
  }
}

export default withAuth0(App);
