import React from "react";
import "./SearchBar.scss";
export default function SearchBar() {
  return (
    <div className="search">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
}
