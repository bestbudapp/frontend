import React from "react";
import { connect } from "react-redux";



const RecommendCard = ({ recommended, saveRecommended }) => {
    return (
        <div>
            <p></p>
            <button>Save</button>
        </div>
    );
};
export default connect(RecommendCard);