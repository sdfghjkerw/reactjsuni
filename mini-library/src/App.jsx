import { Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";

export default function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/books">Books</Link> |{" "}
          <Link to="/add-book">Add Book</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<h2>404 - Page not found</h2>} />
      </Routes>
    </div>
  );
}
