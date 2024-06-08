import React, { useState, memo } from "react";
import "./checkbox.scss";

type CheckboxProps = {
  htmlId: string,
  labelText: string,
  name: string,
}

const Checkbox = ({ htmlId, labelText, name }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id={htmlId}
        checked={isChecked}
        onChange={handleCheckChange}
        name={name}
      />
      <label
        htmlFor={htmlId}
        className="checkbox__label"
      >
        {labelText}
      </label>
    </div>
  );
};

export default memo(Checkbox);
