import { useDispatch, useSelector } from "react-redux";
import { addNote, toggleIsActive } from "../../redux/notes/notesSlice";
import { useState } from "react";
import "./Form.css";
import Search from "../Search/Search";

const Form = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.notes.isActive);

  const [note, setNote] = useState("");
  const [color, setColor] = useState(null);

  const handleColor = (e) => {
    e.preventDefault();
    setColor(e.target.className);
    dispatch(toggleIsActive());
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    dispatch(addNote({ note, color }));
    setNote("");
  };
  return (
    <div className="form">
      <Search />
      <form className="form-note">
        <textarea
          className="form-note-input"
          cols="100"
          rows="10"
          placeholder="Enter your note here..."
          onChange={(e) => setNote(e.target.value)}
          value={note}
        ></textarea>
        <div className="button-colors-container">
          <button onClick={handleColor} className="red">
            {isActive && color === "red" ? "✓" : ""}
          </button>
          <button onClick={handleColor} className="purple">
            {isActive && color === "purple" ? "✓" : ""}
          </button>
          <button onClick={handleColor} className="yellow">
            {isActive && color === "yellow" ? "✓" : ""}
          </button>
          <button onClick={handleColor} className="blue">
            {isActive && color === "blue" ? "✓" : ""}
          </button>
          <button onClick={handleColor} className="green">
            {isActive && color === "green" ? "✓" : ""}
          </button>
        </div>
        <div className="submit-button">
          <button onClick={handleAddNote}>ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
