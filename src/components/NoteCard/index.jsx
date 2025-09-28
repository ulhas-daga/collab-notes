import "./index.css"

const NoteCard = ({ title, content, category, timestamp }) => {
  return (
    <div className="note-card shadow">
      <h3 className="note-title">{title}</h3>
      <p className="note-category">{category}</p>
      <p className="note-content">
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </p>
      <p className="note-timestamp">{timestamp}</p>
    </div>
  );
};

export default NoteCard;
