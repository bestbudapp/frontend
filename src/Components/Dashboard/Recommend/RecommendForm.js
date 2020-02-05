import React, { useState } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../../Utils/axiosWithAuth";
import RecommendList from './RecommendList';
import styled from 'styled-components';

const RecommendFormContainer = styled.div`
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
    margin: 40px auto;
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


//make axios call from api
//storing list of strains- that are recommended as a result of the data entered
// have add (heart or plus sign) on each card that sends to cabinet

const RecommendForm = () => {
  const [strains, setStrains]=useState([]);
  const [formData, setFormData]= useState("");
  const onInputChange = event => {
    console.log(formData)
    setFormData(
       event.target.value,
    )}; 
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('https://bestbudapp.herokuapp.com/api/strains', {limit: 10, offset: 0})
    .then(response =>{
      setStrains(response.data)
      console.log(strains)
    })
    .catch(err => console.log(err.response))
    
  };

  return (<RecommendFormContainer>
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"><span>Input Symptoms: </span></label>
      <input type="text" id="search" onChange={onInputChange}/><br/>
      <button type="submit">Submit</button>

    </form>
    <RecommendList strains={strains}/>
  </RecommendFormContainer>);
};
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(RecommendForm);
