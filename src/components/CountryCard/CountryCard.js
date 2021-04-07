import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.scss";
import { useSelector } from "react-redux";
export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}) {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className="card"
      style={
        theme === "Light"
          ? { background: "var(--darkBlue)", color: "var(--white)" }
          : { background: "var(--white)", color: "var(--darkBlue)" }
      }
      id={name.split(" ").join("")}
    >
      <Link to={`/${name.split(" ").join("-")}`}>
        <div
          className="card_image"
          style={{ backgroundImage: `url('${flag}')` }}
        >
          <span>image</span>
        </div>
      </Link>

      <div className="card_content">
        <div className="card_title">
          <h2>{name}</h2>
        </div>
        <p>
          <b>Population:</b>{" "}
          {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p>
          <b>Region: </b> {region}
        </p>
        <p>
          <b>Capital: </b> {capital}
        </p>
      </div>
    </div>
  );
}
