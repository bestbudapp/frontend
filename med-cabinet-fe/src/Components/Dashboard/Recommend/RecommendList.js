import React from "react";
import { connect } from "react-redux";

import RecommendForm from "./RecommendForm";
import RecommendCard from "./RecommendCard";

export const RecommendList = props => {
  return (
    <div className="recommend-container">
      <RecommendForm />
      <RecommendCard />
    </div>
  );
};
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(RecommendList);
