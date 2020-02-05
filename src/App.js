import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./Utils/PrivateRoute";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import SearchForm from "./Components/Dashboard/Search/SearchForm";
import SearchCard from "./Components/Dashboard/Search/SearchCard";
import RecommendForm from "./Components/Dashboard/Recommend/RecommendForm";

const App = () => {
  return (
    <>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/strains" component={SearchForm} />
      <PrivateRoute path="/strain/:id" component={SearchCard} />
      <PrivateRoute path="/recommender" component={RecommendForm} />
    </>
  );
};

export default App;
