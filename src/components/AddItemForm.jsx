import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ addItem }) => {
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("input box is empty");
      inputRef.current.focus();
      return;
    }
    addItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        autoFocus
        ref={inputRef}
        value={text}
        onChange={handleInput}
        type="text"
      />
      <Button className="btn">Add to list</Button>
    </form>
  );
};

export default AddItemForm;
