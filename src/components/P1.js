import React from "react";
import { useNavigate } from "react-router-dom";
import "./P1.css";

function P1() {
  const navigate = useNavigate();

  return (
    <div className="P1">
      <button className="FindRouteBtn" onClick={() => navigate("/p2")}>
        길찾기
      </button>
      <br />
      <button className="BlockReportBtn">보도블럭 신고</button>
    </div>
  );
}

export default P1;
