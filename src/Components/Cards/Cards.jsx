import React from "react";
import "./Cards.css";

function Cards({ products }) {
  return (
    <div className="card-main">
      {products.map((products) => {
        return (
          <div className="card-border">
            <div className="card">
              <img src={products.image} alt={products.name} />
              <h2>{products.name}</h2>
              <p>{products.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
