import React from "react";
import { Link } from 'react-router-dom';
import hybrid from "../../../img/hybrid.png";
import indica from "../../../img/indica.png";
import sativa from "../../../img/sativa.png";

const CabinetCard = ({ strain, remove }) => {
  return (
    <Link to={`/strain/${strain.id}`}>
      <div className='strain-card'>
        <button onClick={() => remove(strain)}>Remove</button>
        {strain.race === "sativa" && <img src={sativa} alt="sativa" />}
        {strain.race === "indica" && <img src={indica} alt="indica" />}
        {strain.race === "hybrid" && <img src={hybrid} alt="hybrid" />}
        <p className='name'>{strain.name}</p>
        <p className='race'>{strain.race}</p>
      </div>
    </Link>
  );
};

export default CabinetCard;
