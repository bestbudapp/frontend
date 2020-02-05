//add new strain that is not in API to personal cabinet
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { AddStrain } from "../Actions/ActionCreator";

//!!richard code start here
//import styled components
//!!richard code endhere

const LoginForm = ({ UserLogin, user }) => {
  // console.log(props)
  const [values, setValues] = useState({
    email: user,
    password: "password"
  });
  const handleSubmit = evt => {
    evt.preventDefault();

    UserLogin(values);
  };

  const handleChange = evt => {
    evt.preventDefault();
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label"> Email: </label>
        <input
          className="login-field"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />
        <label className="login-label"> Password: </label>
        <input
          className="login-field"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
        <button>Login</button>
      </form>
      <NavLink className="form-link" to="/signup">
        Dont have an account?
      </NavLink>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { AddStrain })(LoginForm);
