import React, { memo, useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./header.scss";

const Header = () => {
  const { name, username } = useSelector((state: RootState) => state.userReducer);

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <div className="header">
      <div className="header__undershadow" />
      <div className="header-container">
        <h2 className="header__heading">
          Добро пожаловать,&nbsp;<span>{name}</span>!
        </h2>
        <div className="header__menu">
          <button
            className="header__menu-item"
            type="button"
          >
            <img className="header__messages-icon" src="/images/header/messages.svg" alt="Сообщения" />
            <p className="header__messages-amount">
              2
            </p>
          </button>
          <button
            className="header__menu-item header__menu_profile"
            type="button"
            onClick={handleDropdown}
          >
            <img className="header__profile-icon" src={`/images/profile/${username}/avatar.svg`} alt="Профиль" />
            <div className="header__dropdown">
              <img className="header__dropdown-icon" src="/images/header/dropdown.svg" alt="↓" />
            </div>
          </button>
        </div>
      </div>
      {
        isDropdownOpened ? (
          <Dropdown
            handleDropdown={handleDropdown}
          />
        ) : (
          null
        )
      }
    </div>
  );
};

export default memo(Header);
