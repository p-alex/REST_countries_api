import React from "react";
import { useHistory } from "react-router-dom";
import "./BackBtn.scss";
import { useSelector } from "react-redux";
export default function BackBtn() {
  const theme = useSelector((state) => state.theme);
  const history = useHistory();
  return (
    <div className="backBtn_container" onClick={() => history.push("/")}>
      <div
        className="backBtn"
        style={
          theme === "Light"
            ? { background: "var(--darkBlue)", color: "var(--white)" }
            : { background: "var(--white)", color: "var(--darkBlue)" }
        }
      >
        <i className="fas fa-arrow-left"></i>
        <span>Back</span>
      </div>
    </div>
  );
}
