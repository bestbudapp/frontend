import React, { useEffect } from "react";
import { connect } from "react-redux";
import CabinetCard from "./CabinetCard";
import {
  GetCabinet,
  RemoveCabinetStrain
} from "../../../Actions/ActionCreator";
import Header from "../Header";
import styled from "styled-components";

const MyCabinetContainer= styled.div`
  
`;

const PersonalCabinet = ({ GetCabinet, strains, RemoveCabinetStrain }) => {
  useEffect(() => {
    GetCabinet();
  }, []);
  if (strains) {
    return (
      <MyCabinetContainer>
        <Header />
        <h2>Personal Cabinet</h2>
        <div className="search-card-container">
          {strains.map(e => (
            <CabinetCard
              strain={e}
              key={e.strain_id}
              remove={RemoveCabinetStrain}
            />
          ))}
        </div>
      </MyCabinetContainer>
    );
  } else {
    return <p>Loading...</p>;
  }
};

const mapStateToProps = state => {
  return {
    strains: state.strains
  };
};
export default connect(mapStateToProps, { GetCabinet, RemoveCabinetStrain })(
  PersonalCabinet
);
