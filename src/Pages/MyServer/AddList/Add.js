import React, { useState } from "react";
import ListDisplay from "./ListDisplay";
import InputText from "./InputText";
import "./Add.css";

function Add() {
  const [items, setItems] = useState(["Lucy"]);

  return (
    <div id="list-container">
      <ListDisplay
        items={items}
        handleClick={item => {
          setItems(items.slice().filter(i => i !== item));
        }}
      />
      <InputText
        handleSubmit={item => {
          setItems(items.concat(item));
        }}
      />
    </div>
  );
}

export default Add;
