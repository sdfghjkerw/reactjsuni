import React from "react";
import "./Card.css";

function Card({ name, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <button className="btn">Подробнее</button>
    </div>
  );
}

export default Card;
