import React from "react";
import "./style.css";

function Hero(props) {
  return <div className="hero text-center container">{props.children}</div>;
}

export default Hero;
