import React from "react";
import ListItem from "./ListItem";

function Input({ value, onAddClick }) {
  return (
    <>
      <input type="text" name={value} />
      <button onClick={onAddClick} type="submit">
        add
      </button>
    </>
  );
}

function List() {
  return (
    <>
      <Input />
      <ul>
        <ListItem />
      </ul>
    </>
  );
}
export default List;
