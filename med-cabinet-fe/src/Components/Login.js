import React, {useState} from "react";
import { Form, Field, withFormik } from "formik";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as ActionCreator from "../Actions/ActionCreator";


const LoginForm = (props) => {
  const [values, setValues] = useState({
    email: "",
password: ""
  })
  const handleSubmit = evt => {
    evt.preventDefault();
    props.userLogin(values);
  }
  const handleChange = (evt) => {
    console.log("change", values)
    evt.preventDefault();
    setValues({
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <>
    <Form className="login-form" onSubmit={handleSubmit}>
      <label className="login-label"> Emaill: </label>
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
    </Form>
    <NavLink className="form-link" to="/signup">
      Dont have an account?
      </NavLink>
      </>
  )
}


// const Login = ({ errors, touched, values, userLogin, history   }) => {
//     // const handleLoginSubmit = e => {
//     //   e.preventDefault();
//     //   userLogin(values, history);
//     // };

//     return (
//       <div className="login-container">
//       <Form className="login-form" onSubmit={handleLoginSubmit}>
//         <label className="login-label"> Email: </label>
//         <Field
//           className="login-field"
//           type="email"
//           name="email"
//           placeholder="Email"
//         />
//         {touched.email && errors.email && (
//           <span className="error"> {errors.email} </span>
//         )}
//         <label className="login-label"> Password: </label>
//         <Field
//           className="login-field"
//           type="password"
//           name="password"
//           placeholder="Password"
//         />
//         {touched.password && errors.password && (
//           <span className="error"> {errors.password} </span>
//         )}
//         <button>Login</button>
//       </Form>
//       <NavLink className="form-link" to="/signup">
//         Dont have an account?
//       </NavLink>
//     </div>
//   );
// };
// const FormikLogin = withFormik({
//   mapPropsToValues({ email, password }) {
//     return {
//       email: email || "",
//       password: password || ""
//     };
//   },

  
// })(Login);
//!!! withFormik validation  //
const mapStateToProps = (state) => {
  return{
    user: state.email,
    passsword: state.password
  }
}


export default connect(mapStateToProps, {ActionCreator})(LoginForm);