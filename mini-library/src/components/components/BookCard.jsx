import React from "react";

function BookCard({ book, onDelete }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Genre:</b> {book.genre}</p>
      <p><b>Rating:</b> {book.rating || "–"}</p>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
}

export default React.memo(BookCard);
