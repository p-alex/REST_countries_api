import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterOption } from "../../actions/filter";
import "./Filter.scss";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const theme = useSelector((state) => state.theme);
  const [isActive, setIsActive] = useState(false);
  const filterOptions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const handleOption = (option) => {
    dispatch(setFilterOption(option));
  };
  return (
    <>
      <div
        className="filterToggle"
        onClick={() => setIsActive(!isActive)}
        style={
          theme === "Light"
            ? { background: "var(--darkBlue)", color: "var(--white)" }
            : { background: "var(--white)", color: "var(--darkBlue)" }
        }
      >
        <span>
          Filter by Region: <b>{filter}</b>
        </span>
        {isActive ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
        {isActive ? (
          <ul
            className="filterOptions"
            style={
              theme === "Light"
                ? { background: "var(--darkBlue)", color: "var(--white)" }
                : { background: "var(--white)", color: "var(--darkBlue)" }
            }
          >
            {filterOptions.map((option) => {
              return (
                <li key={option} onClick={() => handleOption(option)}>
                  {option}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
}
