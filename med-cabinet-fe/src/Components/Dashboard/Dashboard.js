import React from "react";
import { Switch } from "react-router-dom";
// import styled from "styled-components";
import PrivateRoute from "../../Utils/PrivateRoute";
import SearchList from "./Search/SearchList";
import RecommendList from "./Recommend/RecommendList";
import CabinetList from "./PersonalCabinet/CabinetList";

// const Container = styled.div`
//   display: flex;
// `;
// add more divs/ styled components here Richard. Could create a nav container, nav items etc.

export default function Dashboard() {
  return (
    <>
    <p>Dashboard</p>
      <Switch>
        <PrivateRoute path="/Dashboard/Search" component={SearchList} />
        <PrivateRoute path="/Dashboard/Recommend" component={RecommendList} />
        <PrivateRoute path="/Dashboard/PersonalCabinet" component={CabinetList} />
      </Switch>
    </>
  );
}
