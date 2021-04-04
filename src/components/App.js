import React from 'react'
import GlobalStyle from '../style/globalStyle'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { WorkSelector } from '../pages'

function App() {
  return (
    <>
        <Nav/>
      <Router>
        <SideBar/>
        <Switch>
          <Route path="/daily">
            <WorkSelector text="daily"/>
          </Route>
          <Route path="/monthly">
            <WorkSelector text="monthly"/>
          </Route>
          <Route exact path="/">
            <WorkSelector/>
          </Route>
        </Switch>
      </Router>
      <GlobalStyle/>
    </>
  );
}

export default App;
