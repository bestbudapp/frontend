import React from "react";
import { connect } from "react-redux";
import hybrid from '../../../img/hybrid.png';
import indica from '../../../img/indica.png';
import sativa from '../../../img/sativa.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecommendCardContainer = styled.div`
  .search-card-container {
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;
    width: 1024px;

    .first-section {
      height: 320px;
      border-bottom: 2px solid lightgray;
      display: flex;

      .image {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 192px;
        }
      }

      .information {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .race {
          font-size: 0.875rem;
          font-weight: 500;
          color: #333;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
        }

        .rating {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }

        .terpenes {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }
      }
    }

    h3 {
      margin-top: 32px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;
    }

    .description {
      margin-top: 4px;
      font-size: 1rem;
      font-weight: 500;
      color: #333;
    }
  }
`;

//
const RecommendCard = props => {
  return (
    <Link to={`/strain/${props.strain.id}`}>
        <RecommendCardContainer className='strain-card'>
        
            {props.strain.race==='sativa'&&<img src={sativa} alt='sativa'/>}
            {props.strain.race==='indica'&&<img src={indica} alt='indica'/>}
            {props.strain.race==='hybrid'&&<img src={hybrid} alt='hybrid'/>}
            <p className='name'>{props.strain.name}</p>
            <p className='race'>{props.strain.race}</p>
        </RecommendCardContainer>
      </Link>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(RecommendCard);
