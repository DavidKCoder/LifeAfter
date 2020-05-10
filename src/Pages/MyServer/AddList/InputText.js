import React, { useState } from "react";

function InputText(props) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.handleSubmit(value);
        setValue("");
      }}
    >
      <input
        type="text"
        placeholder="Your server..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <small>Max server limit numbers 4</small>
    </form>
  );
}

export default InputText;
