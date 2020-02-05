import React from "react";
import { connect } from "react-redux";

//
const RecommendCard = props => {
  return (
    <div>
      <p></p>
      <button>Save</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(RecommendCard);
