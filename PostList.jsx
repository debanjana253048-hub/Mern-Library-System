import { useEffect, useState } from "react";
import axios from "axios";

export default function PostList() {

  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchBooks = async (selectedFilter = "") => {

    const res = await axios.get(
      `http://localhost:5000/api/books?filter=${selectedFilter}`
    );

    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const requestBook = async (title) => {

    await axios.post(
      "http://localhost:5000/api/books/request",
      {
        title,
        requestedBy: "Student"
      }
    );

    alert("Book requested successfully");

    fetchBooks(filter);
  };

  return (

    <div className="page-container">

      <h1 className="page-title">
        Library Books
      </h1>

      <p className="page-subtitle">
        Browse and request books dynamically
      </p>

      <div className="button-group">

        <button onClick={() => {
          setFilter("low");
          fetchBooks("low");
        }}>
          Count Below 5
        </button>

        <button onClick={() => {
          setFilter("mid");
          fetchBooks("mid");
        }}>
          Count 5 - 10
        </button>

        <button onClick={() => {
          setFilter("high");
          fetchBooks("high");
        }}>
          Count Above 10
        </button>

        <button onClick={() => {
          setFilter("");
          fetchBooks("");
        }}>
          All Books
        </button>

      </div>

      <div className="book-grid">

        {books.map((book) => (

          <div key={book._id} className="book-card">

            {book.image && (
              <img
                src={`http://localhost:5000/${book.image}`}
                alt={book.title}
                className="book-image"
              />
            )}

            <div className="book-content">

              <h3 className="book-title">
                {book.title}
              </h3>

              <p className="book-author">
                <strong>Author:</strong> {book.author}
              </p>

              <p className="book-count">
                <strong>Count:</strong> {book.count}
              </p>

              <button
                onClick={() => requestBook(book.title)}
              >
                Request Book
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}