import React, { useState } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../../Utils/axiosWithAuth";
import RecommendList from './RecommendList';



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

  return (<div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"><span>Input Symptoms: </span></label>
      <input type="text" id="search" onChange={onInputChange}/><br/>
      <button type="submit">Submit</button>

    </form>
    <RecommendList strains={strains}/>
  </div>);
};
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(RecommendForm);
