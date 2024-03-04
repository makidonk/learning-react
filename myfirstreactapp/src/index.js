import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import List from "./ToDoList.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <List />
  </StrictMode>
);