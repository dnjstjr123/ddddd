import React from "react";
import { useNavigate } from "react-router-dom";
import "./P2.css";

function P2() {
  const navigate = useNavigate();

  return (
    <div className="P2">
      <button className="WalkBtn" onClick={() => navigate("/p3")}>
        보행
      </button>
      <br />
      <button className="PublicTransportBtn" onClick={() => navigate("/p3")}>
        대중교통
      </button>
    </div>
  );
}

export default P2;
