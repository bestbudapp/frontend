import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import * as ActionCreator from "../../../Actions/ActionCreator";
import Header from '../Header';
import SearchList from './SearchList';
import styled from 'styled-components';
import { queryStrains } from '../../../Actions/ActionCreator'

const SearchFormContainer = styled.div`
  background: white;

  h2 {
    margin-top: 64px;
    margin-bottom: 32px;
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    text-align: center;
  }

  form {
    width: 768px;
    margin: 0 auto;
    display: flex;

    select {
      margin-right: 8px;
      padding: 12px;
      background-color: #46b430;
      border: none;
      border-radius: 3px;
      font-family: 'Quicksand', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: white;
      cursor: pointer;
      transition: 0.25s;

      :hover {
        opacity: 0.9;
      }
    }

    input {
      width: 100%;
      margin-right: 8px;
      padding: 12px;
      border: 1px solid lightgray;
      border-radius: 3px;
      font-family: 'Quicksand', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: #333;

      ::placeholder {
        color: lightgray;
      }
    }

    button {
      padding: 12px;
      background-color: #46b430;
      border: none;
      border-radius: 3px;
      font-family: 'Quicksand', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: white;
      cursor: pointer;
      transition: 0.25s;

      :hover {
        opacity: 0.9;
      }
    }
  }
`;

const SearchForm = props => {
  const [input, setInput] = useState({
    filter: 'name',
    query: ''
  });

  const onChange = event => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    props.queryStrains({
      filter: input.filter,
      query: input.query,
      limit: 30,
      offset: 0
      
  });
    console.log(input);
  };

  return (
    <SearchFormContainer>
      <Header/>
      <h2>Strain Search</h2>

      <form onSubmit={onSubmit}>
        <select name='filter' onChange={onChange}>
          <option value='name'>Name</option>
          <option value='flavors'>Flavor</option>
          <option value='race'>Race</option>
          <option value='positive_effects'>Effect</option>
          <option value='rating'>Rating</option>
        </select>

        <input type='text' name='query' placeholder='Enter a query' onChange={onChange}/>

        <button type='submit'>Submit</button>
      </form>
      <SearchList/>
    </SearchFormContainer>
  );
};

const mapStateToProps = state => {
  return {queriedStrains:state.queriedStrains};
};

export default connect(mapStateToProps, {queryStrains})(SearchForm);
