import React from "react";
import { connect } from "react-redux";
// import * as ActionCreator from "../../../Actions/ActionCreator";

//will populate aprox 50 strains in alphabetical order 
// populate with popular recommended strains initially 
const SearchCard = ({ search  }) => {
    
  
    return (
      <>
        <div>
         
  
          <button> Edit</button>
          <button> Delete</button>
        </div>
      </>
    );
  };

  export default connect(SearchCard);