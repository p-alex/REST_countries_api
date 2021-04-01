import React from "react";
import "./TopBar.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
export default function TopBar() {
  return (
    <header className="topBar">
      <div className="topBar_container">
        <h2 className="topBar_logo">Where in the world?</h2>
        <ThemeSwitch />
      </div>
    </header>
  );
}
