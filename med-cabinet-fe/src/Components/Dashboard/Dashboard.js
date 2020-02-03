import React from "react";
import { Switch } from "react-router-dom";
// import styled from "styled-components";
import PrivateRoute from "../../utils/PrivateRoute";
import SearchList from "./Search/SearchList";
import RecommendList from "./Recommend/RecommendList";

// const Container = styled.div`
//   display: flex;
// `;
// add more divs/ styled components here Richard. Could create a nav container, nav items etc.

export default function Dashboard() {
  return (
   
      <Switch>
        <PrivateRoute path="/Dashboard/Search" component={SearchList} />
        <PrivateRoute path="/Dashboard/Recommend" component={RecommendList} />
      </Switch>
    
  );
}
