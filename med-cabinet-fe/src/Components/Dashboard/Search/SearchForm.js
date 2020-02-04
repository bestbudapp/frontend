import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as ActionCreator from "../../../Actions/ActionCreator";
//race name, race, taste/flavor, description, positive/negative effects
// filters: ailments, flavors, effects, ratings (1-5),

const SearchForm = ({
  errors,
  touched,
  values,
  status,
  addSearch,
  editSearch,
  setValues,
  resetForm,
  SearchList,
  SearchToEdit
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (SearchToEdit > 0) {
      editSearch(values);
    } else {
      addSearch(values);
    }
    resetForm();
  };

  useEffect(() => {
    if (SearchToEdit > 0) {
      setValues(SearchList.find(Search => Search.id === SearchToEdit));
    }
  }, [SearchToEdit, SearchList, setValues]);

  return (
    <div className="search-form">
      <Form onSubmit={handleSubmit}>
        <label className="search-label">Race:</label>
       
         <Field as="select" name="Race">
            <option value="sativa">Sativa</option>
            <option value="indica">Indica</option>
            <option value="hybrid">Hybrid</option>
          </Field>
        {touched.race && errors.race && (
          <span className="error">{errors.race}</span>
        )}
        <label className="search-label">Type:</label>
        <Field as="select" name="Race">
            <option value="sativa">Sativa</option>
            <option value="indica">Indica</option>
            <option value="hybrid">Hybrid</option>
          </Field>
        {touched.type && errors.type && (
          <span className="error">{errors.type}</span>
        )}
        <label className="search-label">Score:</label>
        <Field as="select" name="Race">
            <option value="sativa">Sativa</option>
            <option value="indica">Indica</option>
            <option value="hybrid">Hybrid</option>
          </Field>
        {touched.score && errors.score && (
          <span className="error">{errors.score}</span>
        )}


        <label className="search-label">Positive Effects:</label>
        <Field as="select" name="Race">
            <option value="sativa">Sativa</option>
            <option value="indica">Indica</option>
            <option value="hybrid">Hybrid</option>
          </Field>
        {touched.positive_effect_plain && errors.positive_effect_plain && (
          <span className="error">{errors.positive_effect_plain}</span>
        )}
        <label className="search-label">Negative Effects:</label>
        <Field as="select" name="Race">
            <option value="sativa">Sativa</option>
            <option value="indica">Indica</option>
            <option value="hybrid">Hybrid</option>
          </Field>
        {touched.negative_effect_plain && errors.negative_effect_plain && (
          <span className="error">{errors.negative_effect_plain}</span>
        )}

        <label className="search-label">Flavor:</label>
        <Field as="select" name="Race">
            <option value="sativa">Sativa</option>
            <option value="indica">Indica</option>
            <option value="hybrid">Hybrid</option>
          </Field>
        {touched.flavor && errors.flavor && (
          <span className="error">{errors.flavor}</span>
        )}
        
        
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikReviewForm = withFormik({
  mapPropsToValues({
    name,
    flavor,
    race,
    positive_effects,
    negative_effects,
    medical_conditions,
    rating
  }) {
    return {
      name: name || "",
      flavor: flavor || "",
      race: race || "",
      positive_effects: positive_effects || "",
      negative_effects: negative_effects || "",
      medical_conditions: medical_conditions || "",
      rating: rating || ""
    };
  }
})(SearchForm);
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, ActionCreator)(FormikReviewForm);
