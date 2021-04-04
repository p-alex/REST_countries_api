import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetQuery, searchQuery } from "../../actions/search";
import "./SearchBar.scss";
import { useSelector } from "react-redux";
export default function SearchBar() {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    return () => {
      dispatch(resetQuery());
    };
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let value = e.target.value;
    dispatch(
      searchQuery(value.charAt(0).toUpperCase() + value.slice(1, value.length))
    );
  };
  return (
    <div
      className="search"
      style={
        theme === "Light"
          ? { background: "var(--darkBlue)", color: "var(--white)" }
          : { background: "var(--white)", color: "var(--darkBlue)" }
      }
    >
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </div>
  );
}
