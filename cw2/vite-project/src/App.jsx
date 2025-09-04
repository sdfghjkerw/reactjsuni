import React from "react";
import "./App.css";
import Product from "./product";

function App() {
  const products = [
    {
      title: "игра",
      price: 340000,
      inStock: true,
      description: "крутая",
      rating: 4,
      tags: ["новинка", "скидка"],
    },
    {
      title: "ноут",
      price: 45687,
      inStock: true,
      description: "удобный",
      rating: 3,
      tags: ["хит продаж"],
    },
    {
      title: "наушники",
      price: 54000,
      inStock: false,
      description: "громкие",
      rating: 5,
      tags: ["скидка"],
    },
  ];

  return (
    <div className="App">
      <h1>Список товаров</h1>
      {products.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </div>
  );
}

export default App;
