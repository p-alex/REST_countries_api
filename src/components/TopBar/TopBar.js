import React from "react";
import "./TopBar.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useSelector } from "react-redux";
export default function TopBar() {
  const theme = useSelector((state) => state.theme);
  return (
    <header
      className="topBar"
      style={
        theme === "Light"
          ? { background: "var(--darkBlue)", color: "var(--white)" }
          : { background: "var(--white)", color: "var(--darkBlue)" }
      }
    >
      <div className="topBar_container">
        <h2 className="topBar_logo">Where in the world?</h2>
        <ThemeSwitch />
      </div>
    </header>
  );
}
