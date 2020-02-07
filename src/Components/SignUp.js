import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserSignup } from '../Actions/ActionCreator';
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const SignUpContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .sign-up-container {
    width: 1024px;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;

    .left {
      width: 50%;
      padding: 128px 64px;
      border-right: 1px solid lightgray;
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        height: 48px;
        width: 48px;
        margin-bottom: 4px;
      }
  
      .brand {
        margin-bottom: 16px;
        display: flex;
        align-items: center;

        h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
        }
      }

      p {
        font-size: 1rem;
        font-weight: 500;
        color: #333;
      }
    }
  
    .right {
      width: 50%;
      padding: 128px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        margin-bottom: 24px;
        font-size: 2rem;
        font-weight: 700;
        color: #333;
      }
    
      form {
        width: 414px;
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
    }
  }
`;

const SignUp = props => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    const userCredentials = {
      username: values.email,
      password: values.password
    };

    //wasnt able to get props.history to work inside of an action
    console.log(userCredentials);
    axiosWithAuth().post('https://bestbudapp.herokuapp.com/api/auth/signup', userCredentials)

    .then(response =>{
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.id);
      props.history.push("/dashboard")
      console.log(response.data)
    })
    .catch(err => console.log(err.response))
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
      <div className='sign-up-container'>

        <div className='left'>
          <img src={logo} alt='bestbud logo'/>
          <div className='brand'>
            <h2>Welcome to bestBud,</h2>
          </div>
          <p>Create your free profile now to get instant access to recommendations from over 1500 cannabis strains based uniquely on your symptoms, desired effects, and more.</p>
        </div>

        <div className='right'>
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>

            <label>Username</label>
            <input type='text' name='email' placeholder='Enter your email' value={values.email} onChange={handleChange}/>

            <label>Password</label>
            <input type='password' name='password' placeholder='Enter a password' value={values.password} onChange={handleChange} minLength='4'/>

            <button type='submit'>Sign Up</button>
          </form>

          <Link to='/'>Already have an account? Sign in here.</Link>
        </div>
      </div>
    </SignUpContainer>
  );
};

const mapStateToProps = state => {
  return {}
};

export default connect(mapStateToProps, {UserSignup})(SignUp);
