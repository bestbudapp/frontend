import React from "react";
import { fetchCurrentCabinetStrain } from '../../../Actions/ActionCreator';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import hybrid from "../../../img/hybrid.png";
import indica from "../../../img/indica.png";
import sativa from "../../../img/sativa.png";

const CabinetCard = ({ strain, remove, fetchCurrentCabinetStrain }) => {
  const onClick = strain_id => {
    fetchCurrentCabinetStrain(strain_id);
  };

  return (
    <Link to={`/cabinet/strain/${strain.cabinet_id}`} onClick={() => onClick(strain.strain_id)}>
      <div className='strain-card'>
        {/* <button onClick={() => remove(strain)}>Remove</button> */}
        {strain.race === "sativa" && <img src={sativa} alt="sativa" />}
        {strain.race === "indica" && <img src={indica} alt="indica" />}
        {strain.race === "hybrid" && <img src={hybrid} alt="hybrid" />}
        <p className='name'>{strain.name}</p>
        <p className='race'>{strain.race}</p>
      </div>
    </Link>
  );
};

export default connect(null, {fetchCurrentCabinetStrain})(CabinetCard);
