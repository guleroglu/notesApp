import "./Notes.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/notes/notesSlice";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => {
    const searchQuery = state.notes.searchNote.toLowerCase();
    return state.notes.notes.filter((note) =>
      note.note.toLowerCase().includes(searchQuery)
    );
  });

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNote(noteId));
  };

  return (
    <div className="notes-container">
      <ul className="notes-wrapper">
        {notes.map((note) => (
          <li
            onDoubleClick={() => handleDeleteNote(note.id)}
            style={{ backgroundColor: note.color }}
            key={note.id}
            className="note-item"
          >
            {note.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
