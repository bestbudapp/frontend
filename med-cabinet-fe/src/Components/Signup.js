import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import * as ActionCreator from "../Actions/ActionCreator";
import {UserSignup} from '../Actions/ActionCreator'


const SignupForm = props => {
const [values, setValues] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: ""
});

const handleSubmit = evt => {
  evt.preventDefault();
  const userCredentials = {
    username: values.email,
    password: values.password
  };
  props.UserSignup(userCredentials)
};

const handleChange = evt => {
  evt.preventDefault();
  setValues({
    ...values,
    [evt.target.name]: evt.target.value
  });
}


return (
  <div className="signup-container">
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="brand"></div>
      <label className="signup-label">First Name:</label>
      <input
        className="signup-input"
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={values.firstName}
      />
      <small>(Between 2-24 characters)</small>

      <label className="signup-label">Last Name:</label>
      <input
        className="signup-input"
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={values.lastName}
      />
      <small>(Between 2-24 characters)</small>

      <label className="signup-label">Email:</label>
      <input
        className="signup-input"
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={values.email}
      />

      <label className="signup-label">Password:</label>
      <input
        className="signup-input"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={values.password}
      />
      <small>(Must be longer than 4 characters)</small>

      <button className="btn" type="submit">
        SIGN UP
      </button>
    </form>
    <NavLink className="form-link" to="/login">
      Already have an account?
    </NavLink>
  </div>
  //!!! SIGN UP Form  //
);
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {UserSignup})(SignupForm);
