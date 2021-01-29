import "./SearchBar.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <div className="searchBarWrapper">
      <input type="text" />
      <div className="iconWrapper">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
