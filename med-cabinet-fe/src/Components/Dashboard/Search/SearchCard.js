import React from "react";
import { connect } from "react-redux";
import * as ActionCreator from "../../../Actions/ActionCreator";

//will populate aprox 50 strains in alphabetical order
// populate with popular recommended strains initially
const SearchCard = ({ Search,startEditSearch, deleteSearch }) => {

 const onEdit = e => {
    e.preventDefault();
    startEditSearch(Search.id);
  };
  const onDelete = e => {
    e.preventDefault();
    deleteSearch(Search.id);
  };
  return (
    <>
    <div className="card-container">
       <p>{Search.name}</p>
        <p>{Search.flavor}</p>
        <p>{Search.race}</p>
        <p>{Search.positive_effects}</p>
        <p>{Search.negative_effects}</p>
        <p>{Search.medical_conditions}</p>
        <p>{Search.rating}</p>
 

        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </div>
    </>
  );
};
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, ActionCreator)(SearchCard);
