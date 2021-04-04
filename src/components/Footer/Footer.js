import React from "react";
import "./Footer.scss";
import { useSelector } from "react-redux";
export default function Footer() {
  const theme = useSelector((state) => state.theme);
  return (
    <footer
      className="footer"
      style={
        theme === "Light"
          ? { color: "var(--white)" }
          : { color: "var(--darkBlue)" }
      }
    >
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/solutions" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/p-alex" target="_blank">
          Alex Daniel
        </a>
      </p>
    </footer>
  );
}
