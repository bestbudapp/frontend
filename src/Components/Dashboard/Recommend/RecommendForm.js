import React, { useState } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../../Utils/axiosWithAuth";
import RecommendList from "./RecommendList";
import styled from "styled-components";
import Header from "../Header";


const RecommendFormContainer = styled.div`
  background: white;

  .go-back-container {
    width: 1024px;
    margin: 0 auto;
    margin-top: 32px;

    p {
      font-size: 1rem;
      font-weight: 500;
      color: #333;
      cursor: pointer;

      i {
        margin-left: 4px;
        margin-right: 4px;
        transition: 0.25s;
      }

      :hover {
        i {
          margin-left: 0;
          margin-right: 8px;
        }
      }
    }
  }

  h2 {
    margin-top: 64px;
    margin-bottom: 8px;
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    text-align: center;
  }

  .prompt {
      margin-bottom: 32px;
      font-size: 1rem;
      font-weight: 500;
      color: #333;
      text-align: center;
  }

  form {
    width: 768px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;

    select {
      margin-right: 8px;
      padding: 12px;
      background-color: #46b430;
      border: none;
      border-radius: 3px;
      font-family: "Quicksand", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: white;
      cursor: pointer;
      transition: 0.25s;

      :hover {
        opacity: 0.9;
      }
    }

    textarea {
      height: 200px;
      width: 100%;
      margin-right: 8px;
      margin-bottom: 16px;
      padding: 12px;
      border: 1px solid lightgray;
      border-radius: 3px;
      font-family: "Quicksand", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: #333;
      resize: none;

      ::placeholder {
        color: lightgray;
      }
    }

    button {
      padding: 12px;
      background-color: #46b430;
      border: none;
      border-radius: 3px;
      font-family: "Quicksand", sans-serif;
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

const RecommendForm = props => {
  const [strains, setStrains] = useState([]);
  const [formData, setFormData] = useState("");

  const onInputChange = event => {
    setFormData(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://bestbudapp.herokuapp.com/api/recommender",{input:formData})
      .then(response => {
        setStrains(response.data.strains);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <RecommendFormContainer>
      <Header/>

      <div className='go-back-container'>
        <p onClick={() => props.history.push('/dashboard')}><i className="fas fa-arrow-left"></i>go back</p>
      </div>

      <h2>Strain Recommender</h2>
      <p className="prompt">Describe your ailments, medical conditions, flavors you like, and the effects you are looking for.</p>
      
      <form onSubmit={handleSubmit}>
        <textarea type="text" id="search" value={formData} onChange={onInputChange} placeholder="Enter information here"></textarea>
        <button type="submit">Submit</button>
      </form>

      <RecommendList strains={strains}/>
    </RecommendFormContainer>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(RecommendForm);
