import React from "react";
import './Hero.css'

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">

    <h1 className="mb-4">Ayapa Data Visualization</h1>
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />

  </div>
);

export default Hero;
