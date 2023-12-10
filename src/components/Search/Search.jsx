import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchNote } from "../../redux/notes/notesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchNote = useSelector((state) => {
    return state.notes.searchNote
  })
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="form-search-input"
        onChange={(e) => dispatch(changeSearchNote(e.target.value))}
        value={searchNote}
      />
    </div>
  );
};

export default Search;
