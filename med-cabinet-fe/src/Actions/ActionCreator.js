import * as types from "./ActionType";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import {Redirect} from 'react-router-dom'


const loginApi = "https://bestbudapp.herokuapp.com/api/auth/signin";
const registerApi = "https://bestbudapp.herokuapp.com/api/auth/signup";

//!! User Signup start here

export const UserSignup = (userData, history) => dispatch => {
console.log("history", history)
  axiosWithAuth()
    .post(registerApi, userData)
    .then(res => {
      console.log("register", res)
      dispatch({ type: types.SIGN_UP });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", userData.email)
      localStorage.setItem("pass", userData.password)
      history.push("/Login");
    })
    .catch(error => console.log(error));
};
//!! User Signup end here


//!! User Login && Logout start here
export const UserLogin = (loginData, history) => dispatch => {
  console.log("User Creds", loginData)
  // dispatch({type: types.LOGIN, payload: loginData})
  axiosWithAuth()
    .post(loginApi, loginData)
    .then(res => {
      dispatch({ type: types.LOGIN });
      localStorage.setItem("token", res.data.token);
      history.push("/Dashboard");
    })
    .catch(err => console.log(err));
};

export const Logout = () => {
  localStorage.removeItem("token");
  return { type: types.LOGOUT };
};
// User Login && Logout end here

// get SavedList start here
// get SavedList end here
