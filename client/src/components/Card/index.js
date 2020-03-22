import React from "react";
import "./style.css";

function Card({children }) {
  return (
    <div className="card mt-4">
      <div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
