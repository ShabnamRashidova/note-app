import { createSlice, nanoid } from "@reduxjs/toolkit";
const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
const initialState = {
  items: savedNotes,
  colors: [
    { id: nanoid(), color: "#F06292" },
    { id: nanoid(), color: "#BA68C8" },
    { id: nanoid(), color: "#FFD54F" },
    { id: nanoid(), color: "#4FC3F7" },
    { id: nanoid(), color: "#AED581" },
  ],
  activeColor1: "#AED581",
  activeColor: localStorage.getItem("activeColor")
    ? localStorage.getItem("activeColor")
    : "#AED581",
  search: "",
};
export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    changeActiveColor: (state, action) => {
      state.activeColor = action.payload;
      localStorage.setItem("activeColor",  state.activeColor)
    },
    setFilter: (state, action) => {
      state.search = action.payload;
    },
    deleteNote: (state, action) => {
      let filterItem = state.items.filter((item) => item.id !== action.payload);
      state.items = filterItem;
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
  },
});
export const itemsSelector = (state) => state.notes.items;
export const activeColorSelector = (state) => state.notes.activeColor;
export const colorSelector = (state) => state.notes.colors;
export const searchSelector = (state) => state.notes.search;
export default notesSlice.reducer;
export const { addNotes, changeActiveColor, setFilter, deleteNote } =
  notesSlice.actions;
