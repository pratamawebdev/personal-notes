import { showFormattedDate } from "../../utils/data";

const NoteItems = ({ note, handleDelete, handleArsip }) => {
  return (
    <div className="notes-item">
      <div className="notes-item-content">
        <h3 className="notes-item-title">{note.title}</h3>
        <p className="notes-item-date">{showFormattedDate(note.createdAt)}</p>
        <p className="notes-item-body">{note.body}</p>
      </div>
      <div className="notes-item-action">
        <button
          onClick={() => handleDelete(note.id)}
          className="notes-item-delete-button"
        >
          Delete
        </button>
        <button
          onClick={() => handleArsip(note.id)}
          className="notes-item-archive-button"
        >
          {note.archived ? "Pindahkan" : "Archive"}
        </button>
      </div>
    </div>
  );
};

export default NoteItems;
