import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import SplashScreen from "./screens/splash";
import Header from "components/header";


export default function App(){
  return (
    <Router>
      <CssBaseline/>
      <Header/>
      <Switch>
        <Route path="/search">
          <h1>Business Results Page</h1>
        </Route>
        <Route path="/check-in">
          <h1>Single Business Listing Page</h1>
        </Route>
        <Route path="/user">
          <h1>User Profile Page</h1>
        </Route>
        <Route path="/dashboard">
          <h1>Business Dashboard Page</h1>
        </Route>
        <Route path="/">
          <SplashScreen/>
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));