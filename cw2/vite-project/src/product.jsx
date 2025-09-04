import React from "react";
import "./product.css";

function Product({ title, price, inStock, description, rating, tags }) {
  let finalPrice = price;
  if (tags.includes("Скидка")) {
    finalPrice = Math.floor(price * 0.9);
  }

  return (
    <div className="product">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        {inStock ? (
          <strong className="price">{finalPrice} тг</strong>
        ) : (
          <span className="out-of-stock">нет в наличии</span>
        )}
      </p>
      <p>Рейтинг: {"⭐".repeat(rating)}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Product;
