import React, { useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
export default function CountryPage({ match }) {
  const theme = useSelector((state) => state.theme);

  document.body.style.backgroundColor =
    theme === "Light" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 95%)";

  return (
    <>
      <TopBar />
      <CountryDetails country={match.params.country} />
      <Footer />
    </>
  );
}
