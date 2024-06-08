import React, { memo } from "react";
import "./linkButton.scss";

type LinkButtonProps = {
  text: string;
}

const LinkButton = ({ text }: LinkButtonProps) => {
  return (
    <button
      className="link-button"
      type="button"
    >
      {text}
    </button>
  )
};

export default memo(LinkButton);
