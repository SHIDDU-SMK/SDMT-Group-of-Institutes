import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./home";
import Facilities from "./pages/facilities";


const NavBarRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/facilities"> <Facilities /> </Route>
      </Switch>
    </Router>
  );
}

export default NavBarRoutes;