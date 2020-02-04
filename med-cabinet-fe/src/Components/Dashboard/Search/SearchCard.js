import React from "react";
import { connect } from "react-redux";
// import * as ActionCreator from "../../../Actions/ActionCreator";

//will populate aprox 50 strains in alphabetical order
// populate with popular recommended strains initially
const SearchCard = ({ search }) => {
  return (
    <div className="card-container">
      {/* <p>{Search.strain}</p>
        <p>{Search.Score}</p>
        <p>{Search.Type}</p>
        <p>{Search.THC_Percent}</p>
        <p>{Search.CBD}</p>
        <p>{Search.effect}</p>
        <p>{Search.flavor}</p>
        <p>{Search.Description1}</p>
        <p>{Search.medical_effect_plain}</p>
        <p>{Search.Recommendation}</p> */}

      <button> Edit</button>
      <button> Delete</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(SearchCard);
