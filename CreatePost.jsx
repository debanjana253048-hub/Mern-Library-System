import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    image: null
  });
 const submit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(form).forEach(([k, v]) => {
      data.append(k, v);
    });

    await axios.post("http://localhost:5000/api/books", data);

    alert("Book Added Successfully");
     setForm({
      title: "",
      author: "",
      image: null
    });
  };

  return (
    <div className="page-container">
      <form onSubmit={submit}>
        <h2>Add New Book</h2>
          <input
          type="text"
          placeholder="Enter Book Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Enter Author Name"
          value={form.author}
          onChange={(e) =>
            setForm({ ...form, author: e.target.value })
          }
        />
        <input
          type="file"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}