import React from "react";
import { useParams } from "react-router-dom";
import NoteCard from "../NoteCard";

// Dummy notes data
const notes = [
  { title: "Meeting Notes", content: "Discuss Q3 targets and deadlines...", category: "Work", timestamp: "2025-09-25" },
  { title: "Vacation Plan", content: "Planning for Goa trip...", category: "Personal", timestamp: "2025-09-20" },
  { title: "App Idea", content: "Notes app with categories and tags...", category: "Ideas", timestamp: "2025-09-18" },
  { title: "Bank Details", content: "Important account numbers stored...", category: "Important", timestamp: "2025-09-15" },
  { title: "Grocery List", content: "Milk, Eggs, Bread, Butter...", category: "Others", timestamp: "2025-09-10" },
];

const CategoryView = () => {
  const { name } = useParams();
  const filteredNotes = notes.filter((note) => note.category === name);

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
