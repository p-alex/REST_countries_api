import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Countries from "../../containers/Countries/Countries";
import FilterBar from "../../containers/FilterBar/FilterBar";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
export default function Homepage() {
  const theme = useSelector((state) => state.theme);
  document.body.style.backgroundColor =
    theme === "Light" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 95%)";
  return (
    <>
      <TopBar />
      <FilterBar />
      <Countries />
      <Footer />
    </>
  );
}
