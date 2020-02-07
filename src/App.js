import React from "react";
<<<<<<< HEAD
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
=======
import { Route } from "react-router-dom";
>>>>>>> a0320c123f11c8b02185780e881a0b88469d3c53
import PrivateRoute from "./Utils/PrivateRoute";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import SearchForm from "./Components/Dashboard/Search/SearchForm";
import SearchCard from "./Components/Dashboard/Search/SearchCard";
<<<<<<< HEAD
import CabinetList from "./Components/Dashboard/PersonalCabinet/CabinetList";
=======
import RecommendForm from "./Components/Dashboard/Recommend/RecommendForm";
import CabinetList from "./Components/Dashboard/PersonalCabinet/CabinetList";
import CabinetStrain from "./Components/Dashboard/PersonalCabinet/CabinetStrain";


const App = () => {
  return (
    <>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/strains" component={SearchForm} />
      <Route path="/strain/:id" component={SearchCard} />
      <Route path="/cabinet" component={CabinetList} />

      {/* // <NavLink to='/Login'>Login</NavLink>
      // <NavLink to='/Dashboard'>Dashboard</NavLink>
      // <Switch>
      //   <Redirect exact from='/' to='/Login' />
      //   <Route path='/Login' render={props => <Login {...props} />} />
      //   <Route path='/Signup' render={props => <Signup {...props} />} />
      //   <PrivateRoute exact path='/Dashboard' component={Dashboard} />
      //   <PrivateRoute exact path='/Dashboard/Recommend'component={RecommendList}/>
      //   <PrivateRoute exact path='/Dashboard/Search' component={SearchList} />
      //   <PrivateRoute exact path='/Dashboard/PersonalCabinet' component={CabinetList} />
      // </Switch> */}

      {/*
      things miguel has changed so you're aware:
      - yarn broke my computer so i did use npm to install the things i needed to, hopefully it doesnt cause any issues with yarn
      - deleted files on the outside and cleaned up some of the react app boilerplate
      - switched location of routes from landing page component to app component and deleted landing page component
      - switched redirect in private route component to '/'
      - default route is sign in page
      - took out some inputs from sign up page and added simple html tag validation to the password
      - didnt really touch any logic except for organizing it and taking away some class names that i thought were unneccessary
      - added styling with styled components
      - deleted dispensary folder, i will merge that into the individual strain cards
      - strain search database styling
      */}

      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/strains" component={SearchForm} />
      <PrivateRoute path="/strain/:id" component={SearchCard} />
      <PrivateRoute path="/recommender" component={RecommendForm} />
      <PrivateRoute exact path="/cabinet" component={CabinetList} />
      <PrivateRoute exact path="/cabinet/strain/:id" component={CabinetStrain} />

    </>
  );
};

export default App;
