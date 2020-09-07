import React, { useState } from "react";
import { connect } from "react-redux";
import { filterProductByText } from "../../actions/filter";

const SearchBar = ({ filterProductByText }) => {
  const [filter, setFilter] = useState("");
  const onChange = (e) => {
    setFilter(e.target.value);
  };
  const onClick = () => {
    filterProductByText(filter);
    setFilter("");
  };
  return (
    <div className="inputs">
      <input
        type="text"
        placeholder="By model e.g. iPhone 11"
        className="search-text-input"
        value={filter}
        onChange={onChange}
      />
      <button className="search-text-button main-color-bg" onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default connect(null, { filterProductByText })(SearchBar);
