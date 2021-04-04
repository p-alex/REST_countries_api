import React from "react";
import { useHistory } from "react-router-dom";
import "./BackBtn.scss";
export default function BackBtn() {
  const history = useHistory();
  return (
    <div className="backBtn_container" onClick={() => history.push("/")}>
      <div className="backBtn">
        <i className="fas fa-arrow-left"></i>
        <span>Back</span>
      </div>
    </div>
  );
}
