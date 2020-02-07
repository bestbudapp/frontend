import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserLogin } from '../Actions/ActionCreator';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const SignInContainer = styled.div`
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

const SignIn = props => {
  const [values, setValues] = useState({
    email:"",
    password: ""
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    const userCredentials = {
      username: values.email,
      password: values.password
    };
    //wasnt able to get props.history to work inside of an action
    axiosWithAuth().post('https://bestbudapp.herokuapp.com/api/auth/signin', userCredentials)

    .then(response =>{
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.id);
      props.history.push("/dashboard")
      console.log(response.data)
    })
    .catch(err => console.log(err.response))
    
  };
  const handleChange = (evt) => {
    evt.preventDefault();
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <SignInContainer>
      <img src={logo} alt='bestbud logo'/>
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' name='email' placeholder='Enter your email' value={values.email} onChange={handleChange}/>

        <label>Password</label>
        <input type='password' name='password' placeholder='Enter a password' value={values.password} onChange={handleChange}/>

        <button type='submit'>Sign In</button>
      </form>

      <Link to='/signup'>Dont have an account? Sign up here.</Link>
    </SignInContainer>
  );
};

const mapStateToProps = state => {
  return{
    user: state.email,
    passsword: state.password
  }
};

export default connect(mapStateToProps, {UserLogin})(SignIn);