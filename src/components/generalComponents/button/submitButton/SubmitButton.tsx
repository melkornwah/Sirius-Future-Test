import React, { memo } from "react";
import "./submitButton.scss";

type SubmitButtonProps = {
  text: string,
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <button
      className="submit-button"
      type="submit"
    >
      {text}
    </button>
  )
};

export default memo(SubmitButton);
