import React from "react";
import Card from "./card";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "валерия", email: "ivan@example.com" },
    { id: 2, name: "аделя", email: "anna@example.com" },
    { id: 3, name: "элина", email: "petr@example.com" },
    { id: 4, name: "камила", email: "maria@example.com" },
  ];

  return (
    <div className="app">
      <h1> пользователи</h1>
      <div className="user-list">
        {users.map((user) => (
          <Card key={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
