import "./SearchBar.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${term}`);
  };

  return (
    <form className="header__searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit" className="searchBar__submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
