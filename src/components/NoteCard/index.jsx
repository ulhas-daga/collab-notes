import "./index.css"
import { FaThumbtack } from "react-icons/fa6";
import { FaThumbtackSlash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const NoteCard = (props) => {
    const {id, title, content, category, timestamp, pinned, onTogglePin, onDelete, onEdit} = props
    return (
        <div className="note-card">
            <div>
                <h3>{title}</h3>
                <button onClick={() => onTogglePin(id)}>{pinned ? <FaThumbtackSlash /> : <FaThumbtack />}</button>
                <button onClick={() => onEdit(id)}><FaEdit /></button>
                <button onClick={() => onDelete(id)}><FaTrash /></button>
            </div> 
            <p className="note-category">{category}</p>
            <p className="note-content">{content.length > 100 ? content.slice(0,100) + "..." : content}</p>
            {/* <p className="note-timestamp">
        Updated {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}
            </p> */}
        </div>
    )
}

export default NoteCard