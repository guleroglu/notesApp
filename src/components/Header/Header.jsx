import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const notesLength = useSelector((state) => state.notes.notes);

  return (
    <div className="header-wrapper">
      <h1 className="title">NotesApp</h1>
      <div className="notes-length">
        <span>Notes: {notesLength.length}</span>
      </div>
    </div>
  );
};

export default Header;
