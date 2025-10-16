import { useState, useEffect, useCallback } from "react";
import BookCard from "../components/components/BookCard";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleDelete = useCallback(
    (id) => {
      setBooks((prev) => prev.filter((b) => b.id !== id));
    },
    [setBooks]
  );

  const filteredBooks = books.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === "all" || b.genre === genre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <h2>Books</h2>
      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="all">All</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Nonfiction</option>
          <option value="tech">Tech</option>
        </select>
      </div>

      {filteredBooks.length ? (
        filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} onDelete={handleDelete} />
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}
