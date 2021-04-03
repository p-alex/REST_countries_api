import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import "./FilterBar.scss";
export default function FilterBar() {
  return (
    <div className="filterBar">
      <SearchBar />
      <Filter />
    </div>
  );
}
