import React, { useState, useEffect } from "react";
import BackBtn from "../BackBtn/BackBtn";
import Loader from "../../ui/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchOne, resetData } from "../../actions/data";
import { Link } from "react-router-dom";
import "./CountryDetails.scss";
import { fetchBorders, resetBorders } from "../../actions/borders";
export default function CountryDetails({ country }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const borders = useSelector((state) => state.borders);
  const theme = useSelector((state) => state.theme);
  const [countryborders, setCountryBorders] = useState("");
  useEffect(() => {
    dispatch(fetchOne(country.split("-").join(" ")));
    return () => {
      dispatch(resetData());
    };
  }, [dispatch, country]);
  useEffect(() => {
    if (data) {
      let b = "";
      data[0]?.borders.map((item) => {
        b += item + ";";
      });
      setCountryBorders(b);
    }
  }, [data]);
  useEffect(() => {
    if (countryborders) {
      dispatch(fetchBorders(countryborders));
    }
    return () => dispatch(resetBorders());
  }, [dispatch, countryborders]);

  return (
    <>
      <BackBtn />
      {data.length ? (
        <main className="countryDetails">
          <div className="countryDetails_flag">
            <img src={data[0].flag} alt={data[0].name} />
          </div>
          <div
            className="countryDetails_content"
            style={
              theme === "Light"
                ? { color: "var(--veryLightWhite)" }
                : { color: "var(--veryDarkBlueText)" }
            }
          >
            <h1>{country.split("-").join(" ")}</h1>
            <div className="countryDetails_contentContainer">
              <ul style={{ marginRight: "80px" }}>
                <li>
                  <b>Native Name:</b> {data[0].nativeName}
                </li>
                <li>
                  <b>Popultaion:</b>{" "}
                  {data[0].population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </li>
                <li>
                  <b>Region:</b> {data[0].region}
                </li>
                <li>
                  <b>Sub Region:</b> {data[0].subregion}
                </li>
                <li>
                  <b>Capital:</b> {data[0].capital}
                </li>
              </ul>
              <ul>
                <li>
                  <b>Top Level Domain:</b> {data[0].topLevelDomain[0]}
                </li>
                <li>
                  <b>Currencies:</b> {data[0].currencies[0].code}
                </li>
                <li>
                  <b>Languages:</b> {data[0].languages[0].name}
                </li>
              </ul>
            </div>
            <div className="countryDetails_borderCountries">
              <b>Border Countries: </b>{" "}
              <ul>
                {borders.length ? (
                  borders.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link
                          to={`/${item.name}`}
                          style={
                            theme === "Light"
                              ? {
                                  background: "var(--darkBlue)",
                                  color: "var(--white)",
                                }
                              : {
                                  background: "var(--white)",
                                  color: "var(--darkBlue)",
                                }
                          }
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </ul>
            </div>
          </div>
        </main>
      ) : (
        <center>
          <Loader />
        </center>
      )}
    </>
  );
}
