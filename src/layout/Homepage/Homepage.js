import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Countries from "../../containers/Countries/Countries";
import FilterBar from "../../containers/FilterBar/FilterBar";
export default function Homepage() {
  return (
    <>
      <TopBar />
      <FilterBar />
      <Countries />
    </>
  );
}
