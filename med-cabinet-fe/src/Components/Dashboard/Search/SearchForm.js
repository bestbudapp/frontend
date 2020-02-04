import React, { useEffect } from "react";
import { connect } from "react-redux";

//strain name, race, taste/flavor, description, positive/negative effects
// filters: ailments, flavors, effects, ratings (1-5),

const SearchForm = ({}) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return <div></div>;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(SearchForm);
