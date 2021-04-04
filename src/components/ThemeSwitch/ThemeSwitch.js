import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSwitch } from "../../actions/theme";
import "./ThemeSwitch.scss";
export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const handleClick = (theme) => {
    dispatch(themeSwitch(theme));
  };
  console.log(theme);
  return (
    <div
      className="themeSwitch"
      style={
        theme === "Light"
          ? { background: "var(--darkBlue)", color: "var(--white)" }
          : { background: "var(--white)", color: "var(--darkBlue)" }
      }
      onClick={
        theme === "Light"
          ? () => handleClick("Dark")
          : () => handleClick("Light")
      }
    >
      {theme === "Light" ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="far fa-moon"></i>
      )}
      <span>{theme === "Light" ? "Light" : "Dark"} Mode</span>
    </div>
  );
}
