import React, { useState, memo } from "react";
import "./textInput.scss";

type TextInputProps = {
  type: string,
  placeholder: string,
  name: string,
}

const TextInput = ({ type, placeholder, name }: TextInputProps) => {
  const [inputValue, SetInputValue] = useState("");

  return (
    <input
      className="text-input"
      onChange={(e) => {
        SetInputValue(e.target.value);
      }}
      type={type}
      placeholder={placeholder}
      value={inputValue}
      name={name}
    />
  );
};

export default memo(TextInput);
