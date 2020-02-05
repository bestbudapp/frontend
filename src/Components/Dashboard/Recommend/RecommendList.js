import React from "react";
import { connect } from "react-redux";
import RecommendCard from "./RecommendCard";

const RecommendList = props => {
  console.log(props.strains);
  return (
    
    <div className="recommend-container">
      
      {props.strains.map(strain => {
        
        return (<RecommendCard strain={strain}/>)
        
      })
    }
    </div>
  );
};
const mapStateToProps = state => {
  return {
    
  };
};
export default connect(mapStateToProps, {})(RecommendList);
