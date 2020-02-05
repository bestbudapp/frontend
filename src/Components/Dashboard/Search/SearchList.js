import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSearchList } from '../../../Actions/ActionCreator';
import { Link } from 'react-router-dom';
import SearchCard from './SearchCard';
import styled from 'styled-components';
import hybrid from '../../../img/hybrid.png';
import indica from '../../../img/indica.png';
import sativa from '../../../img/sativa.png';
import { axiosWithAuth } from '../../../Utils/axiosWithAuth';

const SearchListContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 64px;
  display: flex;
  flex-wrap: wrap;

  a {
    margin-right: 32px;
    margin-bottom: 32px;
    text-decoration: none;

    .strain-card {
      height: 350px;
      width: 320px;
      border-radius: 3px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.25s;
  
      img {
        width: 128px;
        margin-bottom: 16px;
      }
  
      .name {
        margin-bottom: 4px;
        font-size: 1.25rem;
        font-weight: 600;
        color: #333;
      }
  
      .race {
        // padding: 0 12px;
        // border: 1px solid lightgray;
        // border-radius: 9999px;
        font-size: 1rem;
        font-weight: 500;
        color: #333;
      }
  
      :hover {
        box-shadow: none;
      }
    }
  }

  a:nth-child(3n) {
    margin-right: 0;
  }
`;

const SearchList = props => {
  
  

  

  return (
    <SearchListContainer>
      {/* this is just the style, you can make the api call, store the list you get back and iterate over it making one of these cards every iteration with a dynamic route*/}
      {/* wasnt working with props.history.push, i think you may need to pass down props */}
      {props.queriedStrains.map(item=>{
        return(
          <Link to={`/strain/${item.id}`}>
        <div className='strain-card'>
            <img src={sativa} alt='sativa'/>
            <p className='name'>{item.name}</p>
            <p className='race'>{item.race}</p>
        </div>
      </Link>
        )
      })}
      

    </SearchListContainer>
  );
};



const mapStateToProps = state => {
  return {
    queriedStrains:state.queriedStrains
  };
};

export default connect(mapStateToProps)(SearchList);
