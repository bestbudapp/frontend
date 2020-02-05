import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
// import PrivateRoute from '../../Utils/PrivateRoute';
// import SearchList from './Search/SearchList';
// import RecommendList from './Recommend/RecommendList';
// import CabinetList from './PersonalCabinet/CabinetList';

const DashboardContainer = styled.div`
  background: white;
  
  h2 {
    margin-top: 64px;
    margin-bottom: 32px;
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    text-align: center;
  }

  .dashboard-container {
    width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    a {
      text-decoration: none;

      .button {
        width: 320px;
        height: 320px;
        background: white;
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.25s;
        
        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
        }

        :hover {
          box-shadow: none;
        }
      }
    }
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header/>
      <h2>Dashboard</h2>
      <div className='dashboard-container'>
        <Link to='/recommender'>
          <div className='button'>
            <h3>Recommender</h3>
          </div>
        </Link>

        <Link to='/strains'>
          <div className='button'>
            <h3>Strain Search</h3>
          </div>
        </Link>

        <Link to='/cabinet'>
          <div className='button'>
            <h3>My Cabinet</h3>
          </div>
        </Link>
      </div>
      
      {/* <DashNavContainer>
        <NavLink to='/Dashboard/Search'>
          <DashNavItem>
            <p>Strain Search</p>
          </DashNavItem>
        </NavLink>
        <NavLink to='/Dashboard/Recommend'>
          <DashNavItem>
            <p>Strain Recommendation</p>
          </DashNavItem>
        </NavLink>
        <NavLink to='/Dashboard/PersonalCabinet'>
          <DashNavItem>
            <p>Personal Med Cabinet</p>
          </DashNavItem>
        </NavLink>
      </DashNavContainer>
      <Switch>
        <PrivateRoute path='/Dashboard/Search' component={SearchList} />
        <PrivateRoute path='/Dashboard/Recommend'component={RecommendList} />
        <PrivateRoute path='/Dashboard/PersonalCabinet' component={CabinetList}/>

      </Switch> */}
    </DashboardContainer>
  );
};

export default Dashboard;