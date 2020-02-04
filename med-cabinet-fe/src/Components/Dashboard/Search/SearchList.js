import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSearchList } from "../../../Actions/ActionCreator";
// import SearchCard from "./SearchCard";
import SearchForm from "./SearchForm";
// import styled from "styled-components";


// const Container = styled.div`
//   display: flex;
// `;

export const SearchList = ({getSearchList, SearchList}) => {
  useEffect(() => {
    getSearchList();
  }, [getSearchList]);

  return (
    <div className="Search-list-container">
    <SearchForm />
    
  </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {getSearchList})(SearchList);
