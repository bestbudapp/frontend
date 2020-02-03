import React from "react";
import { connect } from "react-redux";



import RecommendForm from "./RecommendForm";
import RecommendCard from "./RecommendCard";

export const RecommendList = ({ recommendList }) => {
  return (
    <div className="recommend-container">
      <RecommendForm />
      <RecommendCard />
    </div>
  );
};

export default connect(RecommendList);
