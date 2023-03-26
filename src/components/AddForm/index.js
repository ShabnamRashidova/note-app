import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes, changeActiveColor,activeColorSelector, colorSelector } from "../../redux/notes/noteSlice";

const AddForm = () => {
  const [name, setName] = useState("");
  const activeColor = useSelector(activeColorSelector);
  const colors = useSelector(colorSelector);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    dispatch(addNotes({ id: nanoid(), name, color: activeColor }));
    setName("");
  };
  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <textarea
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your note here..."
        rows={5}
        className="textarea"
      />
      <div className="color-picker">
        {colors.map((item) => (
          <span key={item.id}>
            <input
              type="radio"
              name="color-pick"
              value={item.color}
              id={item.id}
              onClick={()=>dispatch(changeActiveColor(item.color))}
            />
            <label className={`${item.color===activeColor&&`active`}`}
              htmlFor={item.id}
              style={{ backgroundColor: `${item.color}` }}
              
            ></label>
          </span>
        ))}
      </div>
      <button className="add-button">Add</button>
    </form>
  );
};

export default AddForm;
