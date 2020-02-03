import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
// import PrivateRoute from "../Utils/PrivateRoute";
// import Dashboard from "../Components/Dashboard/Dashboard";
// import SearchList from "../Components/Dashboard/Search/SearchList";
// import RecommendList from "../Components/Dashboard/Recommend/RecommendList";

export default function LandingPage() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/Login" />
        <Route path="/Login" render={props => <Login {...props} />} />
        <Route path="/Signup" render={props => <Signup {...props} />} />
        {/* <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <PrivateRoute exact path="/Dashboard/Recommend"component={RecommendList}/>
        <PrivateRoute exact path="/Dashboard/Search" component={SearchList} /> */}
      </Switch>
    </div>
  );
}
