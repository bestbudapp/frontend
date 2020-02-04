import React from "react";
import { connect } from "react-redux";
import * as ActionCreator from "../../../Actions/ActionCreator";

//will populate aprox 50 strains in alphabetical order
// populate with popular recommended strains initially
const SearchCard = ({ Search }) => {
 
  return (
    <div>
       <p>{Search.name}</p>
        <p>{Search.flavor}</p>
        <p>{Search.race}</p>
        <p>{Search.positive_effects}</p>
        <p>{Search.negative_effects}</p>
        <p>{Search.medical_conditions}</p>
        <p>{Search.rating}</p>
 

      <button> Edit</button>
      <button> Delete</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, ActionCreator)(SearchCard);
