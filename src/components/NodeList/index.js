import React from "react";
import { useSelector } from "react-redux";
import { itemsSelector ,searchSelector} from "../../redux/notes/noteSlice";
import NodeItem from "./NodeItem";
const NodeList = () => {
  const items = useSelector(itemsSelector);
  const search = useSelector(searchSelector);
  return (
    <>
      <div className="notes-grid">
        {items
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => (
            <NodeItem key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default NodeList;
