import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  isActive: false,
  searchNote: "",
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const { note, color } = action.payload;
      state.notes.push({
        id: nanoid(),
        note,
        color: color || "#fff",
      });
    },
    toggleIsActive: (state) => {
      state.isActive = true;
    },
    deleteNote: (state, action) => {
      const noteIdToDelete = action.payload;
      state.notes = state.notes.filter((note) => note.id !== noteIdToDelete);
    },
    changeSearchNote: (state, action) => {
      state.searchNote = action.payload;
    },
  },
});

export const { addNote, toggleIsActive, deleteNote, changeSearchNote } =
  notesSlice.actions;
export default notesSlice.reducer;
