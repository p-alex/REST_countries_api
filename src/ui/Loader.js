import React from "react";
import "./Loader.scss";
import { useSelector } from "react-redux";
export default function Loader() {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className="loader"
      style={
        theme === "Light"
          ? { background: "transparent", color: "var(--white)" }
          : { background: "transparent", color: "var(--darkBlue)" }
      }
    >
      Loading...
    </div>
  );
}
