import { useState } from "react";
import "./index.css";

const NoteEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSave = () => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
      timestamp: new Date().toISOString(),
      pinned: false,
    };

    // Get existing notes or empty array
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Add new note
    const updatedNotes = [...existingNotes, newNote];

    // Save back to localStorage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    console.log("Saved note:", newNote);

    // Clear inputs
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
    <div className="note-editor">
      <input
        type="text"
        placeholder="Enter note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter note content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <div className="note-editor-actions">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default NoteEditor;
