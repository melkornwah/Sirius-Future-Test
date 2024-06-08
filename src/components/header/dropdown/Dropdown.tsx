import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { changeUser, logout } from "../../../features/user";
import "./dropdown.scss";

type DropdownProps = {
  handleDropdown: Function;
};

const userList = [
  {
    username: "michael",
    name: "Михаил",
  },
  {
    username: "anna",
    name: "Анна",
  },
]

const Dropdown = ({ handleDropdown }: DropdownProps) => {
  const currentUser = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const closeDropdown = () => handleDropdown();

  const handleUserChange = (username: string, name: string) => {
    dispatch(changeUser({ username, name }));
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <h2 className="dropdown__heading">
          Смена пользователя
        </h2>
        <ul className="dropdown__userlist">
          {
            userList.map(({ username, name }) => {
              const isUserSelected = username === currentUser.username;

              return (
                <li className={`user ${isUserSelected ? "user_selected" : ""}`}>
                  <button
                    className="user__button"
                    type="button"
                    onClick={() => {
                      handleUserChange(username, name);
                    }}
                  >
                    <img className="user__avatar" src={`images/profile/${username}/avatar.svg`} alt="Аватар" />
                    <div className="user__data">
                      <h3 className="user__name">
                        {name}
                      </h3>
                      {
                        isUserSelected
                          ? (
                            <p className="user__selected">
                              Это вы
                            </p>
                          ) : null
                      }
                    </div>
                  </button>
                </li>
              );
            })
          }
        </ul>
        <button
          className="exit"
          type="button"
          onClick={handleLogOut}
        >
          Выход
          <img className="exit__icon" src="images/dropdown/exit.svg" alt="Выход" />
        </button>
        <img className="dropdown__triangle" src="images/dropdown/triangle.svg" alt="^" />
        <button
          className="dropdown__close"
          type="button"
          onClick={closeDropdown}
        >
          <img className="dropdown__close-icon" src="images/dropdown/close.svg" alt="X" />
        </button>
      </div>
    </div>
  );
};

export default memo(Dropdown);
