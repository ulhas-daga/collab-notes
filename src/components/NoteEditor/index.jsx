import { useState } from "react";

const NoteEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
      timestamp: new Date().toISOString(),
      pinned: false,
    };

    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = [...existingNotes, newNote];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    console.log("Saved note:", newNote);

    setTitle("");
    setContent("");
    setCategory("");
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setCategory("");
    console.log("Note editing cancelled");
  };

  return (
    <form className="container mt-4 p-4 border rounded shadow-sm bg-light" onSubmit={handleSave}>
      <h4 className="mb-3">Create a Note</h4>

      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-bold">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="form-control"
          placeholder="Enter note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label fw-bold">
          Content
        </label>
        <textarea
          id="content"
          className="form-control"
          placeholder="Enter note content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label fw-bold">
          Category
        </label>
        <input
          id="category"
          type="text"
          className="form-control"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button type="submit" className="btn btn-success">
          Save
        </button>
        <button type="button" className="btn btn-danger" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteEditor;
