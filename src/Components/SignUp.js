import React, { useState } from 'react';
import { connect } from 'react-redux';
// import * as ActionCreator from '../Actions/ActionCreator';
import { UserSignup } from '../Actions/ActionCreator';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const SignUpContainer = styled.div`
height: 90vh;
width: 414px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
  height: 64px;
  margin-bottom: 8px;
}

h2 {
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
  }

  input {
    margin-bottom: 8px;
    padding: 12px;
    border: 1px solid lightgray;
    border-radius: 3px;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #333;

    ::placeholder {
      color: lightgray;
    }
  }

  button {
    margin: 8px 0;
    padding: 12px;
    background: #46b430;
    border: none;
    border-radius: 3px;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    transition: 0.25s;

    :hover {
      opacity: 0.9;
    }
  }
}

a {
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  transition: 0.25s;

  :hover {
    opacity: 0.5;
  }
}
`;

const SignUp = props => {
  const [values, setValues] = useState({
    // firstName: '',
    // lastName: '',
    email: '',
    password: ''
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
  };

  return (
    <SignUpContainer>
      <img src={logo} alt='bestbud logo'/>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        {/* <label>First Name:</label>
        <input type='text' name='firstName' placeholder='First Name' value={values.firstName} onChange={handleChange}/>
        <small>(Between 2-24 characters)</small>

        <label>Last Name:</label>
        <input type='text' name='lastName' placeholder='Last Name' value={values.lastName} onChange={handleChange}/>
        <small>(Between 2-24 characters)</small> */}

        <label>Email</label>
        <input type='text' name='email' placeholder='Enter your email' value={values.email} onChange={handleChange}/>

        <label>Password</label>
        <input type='password' name='password' placeholder='Enter a password' value={values.password} onChange={handleChange} minLength='4'/>
        {/* <small>(Must be longer than 4 characters)</small> */}
        {/* used a minlength tag instead */}

        <button type='submit'>Sign Up</button>
      </form>

      <Link to='/'>Already have an account? Sign in here.</Link>
    </SignUpContainer>
  );
};

const mapStateToProps = state => {
  return {}
};

export default connect(mapStateToProps, {UserSignup})(SignUp);
