import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
export default function CountryPage({ match }) {
  return (
    <>
      <TopBar />
      <CountryDetails country={match.params.country} />
    </>
  );
}
