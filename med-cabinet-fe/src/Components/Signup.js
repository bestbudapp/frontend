import React from "react";
import { Form, Field, withFormik } from "formik";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as ActionCreator from "../Actions/ActionCreator";

const Signup = ({ errors, touched, values, UserSignup, history }) => {
  const handleSignupSubmit = e => {
    e.preventDefault();
    UserSignup(values, history);
  };

  return (
    <div className="signup-container">
      <Form className="signup-form" onSubmit={handleSignupSubmit}>
        <div className="brand"></div>
        <label className="signup-label">First Name:</label>
        <Field
          className="signup-field"
          type="text"
          name="first_name"
          placeholder="First Name"
        />
        <small>(Between 2-24 characters)</small>
        {touched.first_name && errors.first_name && (
          <span className="error">{errors.first_name}</span>
        )}
        <label className="signup-label">Last Name:</label>
        <Field
          className="signup-field"
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <small>(Between 2-24 characters)</small>
        {touched.lastName && errors.lastName && (
          <span className="error">{errors.lastName}</span>
        )}
        <label className="signup-label">Email:</label>
        <Field
          className="signup-field"
          type="email"
          name="email"
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span className="error">{errors.email}</span>
        )}
        <label className="signup-label">Password:</label>
        <Field
          className="signup-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        <small>(Must be longer than 4 characters)</small>
        {touched.password && errors.password && (
          <span className="error">{errors.password}</span>
        )}
        <button className="btn" type="submit">
          SIGN UP
        </button>
      </Form>
      <NavLink className="form-link" to="/login">
        Already have an account?
      </NavLink>
    </div>
    //!!! SIGN UP Form  //
  );
};

// withFormik validation //
const FormikSignup = withFormik({
  mapPropsToValues({ first_name, lastName, email, password }) {
    return {
      first_name: first_name || "",
      lastName: lastName || "",
      email: email || "",
      password: password || ""
    };
  }
})(Signup);
//!!! withFormik validation  //

export default connect(state => state, ActionCreator)(FormikSignup);
