import * as types from "./ActionType";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const loginApi = "https://bestbudapp.herokuapp.com/api/auth/signin";
const registerApi = "https://bestbudapp.herokuapp.com/api/auth/signup";

//!! User Signup start here

export const UserSignup = (userData, history) => dispatch => {
  console.log("history", history);
  axiosWithAuth()
    .post(registerApi, userData)
    .then(res => {
      console.log("register", res);
      dispatch({ type: types.SIGN_UP });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", userData.email);
      localStorage.setItem("password", userData.password);
      localStorage.setItem("userID", res.data.id);

      history.push("/Login");
    })
    .catch(error => console.log(error));
};
//!! User Signup end here

//!! User Login && Logout start here
export const UserLogin = ({ email, password, history }) => dispatch => {
  // console.log("User Creds", loginData)
  // console.log(`props`, history)
  const userCredentials = {
    username: email,
    password: password
  };
  axiosWithAuth()
    .post(loginApi, userCredentials)
    .then(res => {
      dispatch({ type: types.LOGIN });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", email);
      localStorage.setItem("password", password);
      localStorage.setItem("userID", res.data.id);
      // history.push("/Dashboard");
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

//!!get SearchList
export const displaySearchList = Search => {
  return { type: types.GET_SEARCH, payload: Search };
};
export const getSearchList = () => dispatch => {
  axiosWithAuth()
    .get("https://bestbudapp.herokuapp.com")
    .then(({ data }) => {
      dispatch(displaySearchList(data));
    })
    .catch(err => console.log(err));
};
//!! get SearchList

// get SavedCabinet start here
export const GetCabinet = () => dispatch => {
  const id = localStorage.getItem("userID");
  axiosWithAuth()
    .get(`https://bestbudapp.herokuapp.com/api/cabinet/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: types.GET_CABINET_STRAINS, payload: res.data });
    })
    .catch(err => console.log(err));
};
// get SavedCabinet end here

export const RemoveCabinetStrain = strain => dispatch => {
  axiosWithAuth()
    .delete(`https://bestbudapp.herokuapp.com/api/cabinet/${strain.cabinet_id}`)
    .then(res => {
      console.log("removed", res);
      dispatch({ type: types.DELETE_CABINET_STRAINS, payload: res.data });
    })
    .catch(err => console.log(err));
};

// export const AddStrain = strain => dispatch => {
//   const id = localStorage.getItem("userID");
//   axiosWithAuth()
//     .delete(`https://bestbudapp.herokuapp.com/api/cabinet/${id}`)
//     .then(res => {
//       console.log("removed", res);
//       dispatch({ type: types.DELETE_CABINET_STRAINS, payload: res.data });
//     })
//     .catch(err => console.log(err));
// };
