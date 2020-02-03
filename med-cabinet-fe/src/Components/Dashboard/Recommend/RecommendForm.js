import React from "react";
import { connect } from "react-redux";

//make axios call from api
//storing list of strains- that are recommended as a result of the data entered 
// have add (heart or plus sign) on each card that sends to cabinet


const RecommendForm = ({  }) => {
    const handleSubmit = e => {
      e.preventDefault();
    };

    return (
        <div>
        
        </div>
      );
    };
    
    // const FormikRecommendForm = withFormik({
    //   mapPropsToValues({  }) {
    //     return {
    //      //formik here
    //     };
    //   },
    
      
      export default connect(RecommendForm);