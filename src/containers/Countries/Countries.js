import React, { useEffect, useState } from "react";
import "./Countries.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll, resetData } from "../../actions/data";
import CountryCard from "../../components/CountryCard/CountryCard";
export default function Countries() {
  const data = useSelector((state) => state.data);
  const search = useSelector((state) => state.search);
  const filter = useSelector((state) => state.filter);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [countryArray, setCountryArray] = useState([]);
  useEffect(() => {
    dispatch(fetchAll());
    return () => {
      dispatch(resetData());
    };
  }, [dispatch]);
  useEffect(() => {
    let updatedData = data.filter((country) => {
      if (filter !== "All") {
        if (country.name.includes(search) && country.region === filter) {
          return true;
        }
      } else {
        if (country.name.includes(search)) {
          return true;
        }
      }
    });
    setCountryArray(updatedData);
  }, [data, search, filter]);
  return (
    <div className="countries">
      {countryArray.length !== 0 ? (
        countryArray.map((country) => {
          return (
            <CountryCard
              key={country.name}
              name={country.name}
              population={country.population}
              flag={country.flag}
              capital={country.capital}
              region={country.region}
            />
          );
        })
      ) : (
        <p
          style={
            theme === "Light"
              ? { color: "var(--white)" }
              : { color: "var(--darkBlue)" }
          }
        >
          No result.
        </p>
      )}
    </div>
  );
}
