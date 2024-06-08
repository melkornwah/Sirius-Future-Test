import React, { memo } from "react";
import "./languageSelector.scss"

const LanguageSelector = () => {
  return (
    <div className="language-selector">
      <button
        className="language-selector__button language-selector__button_selected"
        type="button"
      >
        RU
      </button>
      <button
        className="language-selector__button"
        type="button"
      >
        EN
      </button>
    </div>
  );
};

export default memo(LanguageSelector);
