import React, { memo } from "react";
import "./homeworkButton.scss";

type HomeworkButtonProps = {
  text: string,
  icon: string,
  backgroundColor: string,
}

const HomeworkButton = ({ text, icon, backgroundColor }: HomeworkButtonProps) => {
  return (
    <button
      className="homework__button"
      type="button"
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <h2 className="homework__heading">
        {text}
      </h2>
      <img className="homework__icon" src={`images/homework/${icon}.svg`} alt={text} />
    </button>
  );
};

export default memo(HomeworkButton);
