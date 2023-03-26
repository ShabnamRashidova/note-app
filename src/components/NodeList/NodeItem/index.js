import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../../redux/notes/noteSlice";
const NodeItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="note" style={{ background: `${item.color}` }}>
      {item.name}
      <span
        className="delete-note"
        onClick={() => dispatch(deleteNote(item.id))}
      >
        ×
      </span>
    </div>
  );
};

export default NodeItem;
