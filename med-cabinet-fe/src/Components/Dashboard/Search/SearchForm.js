import React, { useEffect } from "react";
import { connect } from "react-redux";



//strain name, race, taste/flavor, description, positive/negative effects
// filters: flavors, effects, ratings (1-5)

const SearchForm = ({ }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
   
  }, []);

  return (
    <div >
     
    </div>
  );
};

// const FormikSearchForm = withFormik({
//     mapPropsToValues({  }) {
//       return {
//        //formik here
//       };
//     }
// }
 

export default connect(SearchForm);