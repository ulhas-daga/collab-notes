import { useState, useEffect } from "react";
import NoteCard from "../NoteCard";

const HomePage = () => {
  const userId = localStorage.getItem("userId");
  const [notesInfo, setNotesInfo] = useState([]);

  useEffect(() => {
    let AllNotes = localStorage.getItem("NotesData");
    AllNotes = JSON.parse(AllNotes);
    setNotesInfo(AllNotes.filter((n) => n.userId == userId));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {notesInfo.map((note, index) => (
          <div className="col-md-4 col-lg-3 col-sm-6" key={index}>
            <NoteCard
              title={note.title}
              category={note.category}
              content={note.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
