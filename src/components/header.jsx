import React, { useRef } from "react";
import logo from "../assets/cloud.png";

export default function Header() {
  return (
    <header>
      <div className="head">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>Weather App</h1>
      </div>
    </header>
  );
}
