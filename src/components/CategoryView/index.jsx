import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoteCard from "../NoteCard";

const CategoryView = () => {
  const { name } = useParams();
  const userId = localStorage.getItem("userId");
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    let allNotes = localStorage.getItem("NotesData");
    if (allNotes) {
      allNotes = JSON.parse(allNotes);
      const userNotes = allNotes.filter(
        (note) => note.userId == userId && note.category === name
      );
      setFilteredNotes(userNotes);
    }
  }, [name, userId]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 font-salsa">📁 {name} Notes</h2>
      <div className="row g-3">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <NoteCard {...note} />
            </div>
          ))
        ) : (
          <p className="text-center">No notes available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryView;