import React from "react";
import "./CountryCard.scss";
export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}) {
  return (
    <div className="card">
      <div
        className="card_image"
        style={{ backgroundImage: `url('${flag}')` }}
      ></div>
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
