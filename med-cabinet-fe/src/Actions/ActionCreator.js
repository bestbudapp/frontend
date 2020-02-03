import * as types from "./ActionType";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const loginApi = "https://bestbudapp.herokuapp.com/";

// User Signup
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
  //!! User Signup 