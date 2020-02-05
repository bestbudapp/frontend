import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as ActionCreator from "../../../Actions/ActionCreator";
import { Form, Field, withFormik } from "formik";
import Header from '../Header';
import SearchList from './SearchList';
import styled from 'styled-components';

const SearchFormContainer = styled.div`
  background: white;

  h2 {
    margin-top: 64px;
    margin-bottom: 32px;
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    text-align: center;
  }

  form {
    width: 768px;
    margin: 0 auto;
    display: flex;

    select {
      margin-right: 8px;
      padding: 12px;
      background-color: #46b430;
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

    input {
      width: 100%;
      margin-right: 8px;
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
      padding: 12px;
      background-color: #46b430;
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
`;

// const SearchForm = ({
//   errors,
//   touched,
//   values,
//   status,
//   addSearch,
//   editSearch,
//   setValues,
//   resetForm,
//   SearchList,
//   SearchToEdit
// }) => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     if (SearchToEdit > 0) {
//       editSearch(values);
//     } else {
//       addSearch(values);
//     }
//     resetForm();
//   };

//   useEffect(() => {
//     if (SearchToEdit > 0) {
//       setValues(SearchList.find(Search => Search.id === SearchToEdit));
//     }
//   }, [SearchToEdit, SearchList, setValues]);

//   return (
//     <SearchFormContainer>
//       <Form onSubmit={handleSubmit}>
//         <label className="search-label">Race:</label>
       
//          <Field as="select" name="Race">
//             <option value="sativa">Sativa</option>
//             <option value="indica">Indica</option>
//             <option value="hybrid">Hybrid</option>
//           </Field>
//         {touched.race && errors.race && (
//           <span className="error">{errors.race}</span>
//         )}
//         <label className="search-label">Type:</label>
//         <Field as="select" name="Race">
//             <option value="sativa">Sativa</option>
//             <option value="indica">Indica</option>
//             <option value="hybrid">Hybrid</option>
//           </Field>
//         {touched.type && errors.type && (
//           <span className="error">{errors.type}</span>
//         )}
//         <label className="search-label">Score:</label>
//         <Field as="select" name="Race">
//             <option value="sativa">Sativa</option>
//             <option value="indica">Indica</option>
//             <option value="hybrid">Hybrid</option>
//           </Field>
//         {touched.score && errors.score && (
//           <span className="error">{errors.score}</span>
//         )}


//         <label className="search-label">Positive Effects:</label>
//         <Field as="select" name="Race">
//             <option value="sativa">Sativa</option>
//             <option value="indica">Indica</option>
//             <option value="hybrid">Hybrid</option>
//           </Field>
//         {touched.positive_effect_plain && errors.positive_effect_plain && (
//           <span className="error">{errors.positive_effect_plain}</span>
//         )}
//         <label className="search-label">Negative Effects:</label>
//         <Field as="select" name="Race">
//             <option value="sativa">Sativa</option>
//             <option value="indica">Indica</option>
//             <option value="hybrid">Hybrid</option>
//           </Field>
//         {touched.negative_effect_plain && errors.negative_effect_plain && (
//           <span className="error">{errors.negative_effect_plain}</span>
//         )}

//         <label className="search-label">Flavor:</label>
//         <Field as="select" name="Race">
//             <option value="sativa">Sativa</option>
//             <option value="indica">Indica</option>
//             <option value="hybrid">Hybrid</option>
//           </Field>
//         {touched.flavor && errors.flavor && (
//           <span className="error">{errors.flavor}</span>
//         )}
        
        
//         <button>Submit</button>
//       </Form>
//     </SearchFormContainer>
//   );
// };

// const FormikReviewForm = withFormik({
//   mapPropsToValues({
//     name,
//     flavor,
//     race,
//     positive_effects,
//     negative_effects,
//     medical_conditions,
//     rating
//   }) {
//     return {
//       name: name || "",
//       flavor: flavor || "",
//       race: race || "",
//       positive_effects: positive_effects || "",
//       negative_effects: negative_effects || "",
//       medical_conditions: medical_conditions || "",
//       rating: rating || ""
//     };
//   }
// })(SearchForm);

const SearchForm = props => {
  return (
    <SearchFormContainer>
      <Header/>
      <h2>Strain Search</h2>
      <form>
        <select name='filter'>
          <option value='name'>Name</option>
          <option value='flavors'>Flavor</option>
          <option value='race'>Race</option>
          <option value='positive_effects'>Effect</option>
          <option value='rating'>Rating</option>
        </select>

        <input type='text' name='query' placeholder='Enter a query'/>

        <button type='submit'>Submit</button>
      </form>
      <SearchList/>
    </SearchFormContainer>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, ActionCreator)(SearchForm);
