import { useState, useRef, useEffect } from "react";
import React from "react";

const Input = () => {
  const [name, setName] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        onChange={() => setName(inputRef.current.value)}
        type="text"
      />
      <h1>My name is {name}</h1>
    </div>
  );
};

export default Input;
