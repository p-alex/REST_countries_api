import React, { useEffect } from "react";
import "./Countries.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll } from "../../actions/data";
import CountryCard from "../../components/CountryCard/CountryCard";
export default function Countries() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <div className="countries">
      {data
        ? data.map((country, id) => {
            return (
              <CountryCard
                key={id}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
              />
            );
          })
        : null}
    </div>
  );
}
