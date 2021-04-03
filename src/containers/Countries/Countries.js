import React, { useEffect, useState } from "react";
import "./Countries.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll } from "../../actions/data";
import CountryCard from "../../components/CountryCard/CountryCard";
export default function Countries() {
  const data = useSelector((state) => state.data);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [countryArray, setCountryArray] = useState([]);
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  useEffect(() => {
    let updatedData = data.filter((country) => country.name.includes(search));
    setCountryArray(updatedData);
  }, [data, search]);
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
        <p>No result.</p>
      )}
    </div>
  );
}
