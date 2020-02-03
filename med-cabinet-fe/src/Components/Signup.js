import React from "react";
import { connect } from "react-redux";
import { userSignup } from "../Actions/ActionCreator";

const Signup = ({  }) => {
    const handleSignupSubmit = e => {
      e.preventDefault();
      userSignup();
     
    };
    
    return (
        <div >
          
        </div>
       
      );
    };
    
    
    export default connect(Signup);