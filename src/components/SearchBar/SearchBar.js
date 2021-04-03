import React from "react";
import { useDispatch } from "react-redux";
import { searchQuery } from "../../actions/search";
import "./SearchBar.scss";
export default function SearchBar() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let value = e.target.value;
    dispatch(
      searchQuery(value.charAt(0).toUpperCase() + value.slice(1, value.length))
    );
  };
  return (
    <div className="search">
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </div>
  );
}
