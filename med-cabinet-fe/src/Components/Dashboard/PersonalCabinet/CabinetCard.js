//add heart or plus button
import React from "react";

const CabinetCard = ({ strain, remove }) => {
  return (
    <div className="cabinet-card">
      <p className="cabinet-card-name">
        Name: {strain.name} - {strain.race}{" "}
      </p>
      <p className="cabinet-card-rating">Rating: {strain.rating}</p>
      <p className="cabinet-card-flavors">Flavors: {strain.flavors}</p>
      <div className="cabinet-card-effects">
        <p>positive Effects: {strain.positive_effects}</p>
        <p>negative Effects: {strain.negative_effects}</p>
      </div>
      <p className="cabinet-card-medical">
        Medical Uses: {strain.medical_uses}
      </p>
      <p className="cabinet-card-desc">Description: {strain.description}</p>
      <button onClick={() => remove(strain)}>Remove</button>
    </div>
  );
};

export default CabinetCard;
