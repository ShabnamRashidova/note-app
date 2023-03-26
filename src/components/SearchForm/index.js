import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/notes/noteSlice";
const SearchForm = () => {
  const dispatch = useDispatch();
  return (
    <form>
      <input
        onChange={(e) => dispatch(setFilter(e.target.value))}
        type="search"
        className="search-input"
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchForm;