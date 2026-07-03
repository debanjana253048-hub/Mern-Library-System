import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useEffect } from "react";

import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function Home() {

  useEffect(() => {
    document.title = "Library Home";
  }, []);

  return (

    <div className="page-container">

      <div className="home-box">

        <h1 className="page-title">
          Library Management System
        </h1>

        <p>
          Welcome to the MERN Stack Library Management
          System. You can add books, request books,
          filter records, and manage the library
          dynamically using MongoDB, Express,
          React, and Node.js.
        </p>

      </div>

    </div>
  );
}

function AddBookPage() {

  useEffect(() => {
    document.title = "Add Book";
  }, []);

  return <CreatePost />;
}

function BooksPage() {

  useEffect(() => {
    document.title = "Books List";
  }, []);

  return <PostList />;
}

export default function App() {

  return (

    <BrowserRouter>

      <nav>

        <Link to="/">
          Home
        </Link>

        <Link to="/books">
          Books
        </Link>

        <Link to="/add-book">
          Add Book
        </Link>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/books"
          element={<BooksPage />}
        />

        <Route
          path="/add-book"
          element={<AddBookPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}