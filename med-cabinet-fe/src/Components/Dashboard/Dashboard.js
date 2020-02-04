import React from "react";
import { NavLink, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "../../Utils/PrivateRoute";
import SearchList from "./Search/SearchList";
import RecommendList from "./Recommend/RecommendList";
import CabinetList from "./PersonalCabinet/CabinetList";

const Container = styled.div`
  display: flex;
`;
const DashNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 20vw;
  border-bottom-right-radius: 50px;
  min-height: 70vh;
`;
const DashNavItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 10px;
  border: 2px solid black;
  color: black;
  margin: 0.3em;
  padding: 1em;
  font-weight: bold;
  text-decoration: none;
  min-width: 400px;
  cursor: pointer;
  i {
    text-decoration: none;
  }
`;
// add more divs/ styled components here Richard. Could create a nav container, nav items etc.

export default function Dashboard() {
  return (
    <Container>
      <DashNavContainer>
        <NavLink to="/Dashboard/Search">
          <DashNavItem>
            <p>Strain Search</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/Dashboard/Recommend">
          <DashNavItem>
            <p>Strain Recommendation</p>
          </DashNavItem>
        </NavLink>
        <NavLink to="/Dashboard/PersonalCabinet">
          <DashNavItem>
            <p>Personal Med Cabinet</p>
          </DashNavItem>
        </NavLink>
      </DashNavContainer>
      <Switch>
        <PrivateRoute path="/Dashboard/Search" component={SearchList} />
        <PrivateRoute path="/Dashboard/Recommend" component={RecommendList} />

        <PrivateRoute
          path="/Dashboard/PersonalCabinet"
          component={CabinetList}
        />
      </Switch>
    </Container>
  );
}
