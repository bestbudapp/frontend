import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchCard from "./SearchCard";
import SearchForm from "./SearchForm";

export const SearchList = ({}) => {
  useEffect(() => {}, []);

  return (
    <div>
      <SearchForm />
      <SearchCard />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(SearchList);
