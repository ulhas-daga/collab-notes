import "./index.css"

const NoteCard = (props) => {
    const {title, content, category, timestamp} = props
    return (
        <div className="note-card">
            <h3>{title}</h3>
            <p className="note-category">{category}</p>
            <p className="note-content">{content.length > 100 ? content.slice(0,100) + "..." : content}</p>
            {/* <p className="note-timestamp">
        Updated {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}
            </p> */}
        </div>
    )
}

export default NoteCard