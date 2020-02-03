import * as types from "./ActionType";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

// const loginApi = "https://bestbudapp.herokuapp.com/user/login";
// const registerApi = "https://bestbudapp.herokuapp.com/user/register";



// User Signup start here
export const userSignup = (userData, history) => dispatch => {
    axiosWithAuth()
      .post()
      .then(({ data }) => {
        dispatch({ type: types.SIGN_UP });
        localStorage.setItem("token", data.token);
        history.push("/Login");
      })
      .catch(error => console.log(error));
  };
  //!! User Signup end here



// User Login && Logout start here
// User Login && Logout end here



// get SavedList start here
// get SavedList end here