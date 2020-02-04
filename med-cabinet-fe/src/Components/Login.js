import React from "react";
import { Form, Field, withFormik } from "formik";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as ActionCreator from "../Actions/ActionCreator";


const Login = ({ errors, touched, values, userLogin, history   }) => {
    const handleLoginSubmit = e => {
      e.preventDefault();
      userLogin(values, history);
    };

    return (
      <div className="login-container">
      <Form className="login-form" onSubmit={handleLoginSubmit}>
        <label className="login-label"> Email: </label>
        <Field
          className="login-field"
          type="email"
          name="email"
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span className="error"> {errors.email} </span>
        )}
        <label className="login-label"> Password: </label>
        <Field
          className="login-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <span className="error"> {errors.password} </span>
        )}
        <button>Login</button>
      </Form>
      <NavLink className="form-link" to="/signup">
        Dont have an account?
      </NavLink>
    </div>
  );
};
const FormikLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  
})(Login);
//!!! withFormik validation  //

export default connect(state => state, ActionCreator)(FormikLogin);