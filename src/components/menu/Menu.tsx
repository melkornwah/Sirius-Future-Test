import React, { useState, memo } from "react";
import menu from "./menuData";
import "./menu.scss";

type MenuProps = {
  currentPage: string,
  setCurrentPage: Function,
};

const Menu = ({ currentPage, setCurrentPage }: MenuProps) => {
  return (
    <div className="menu">
      <img className="menu__logo" src="/images/logo/menu.svg" alt="Sirius Future" />
      <ul className="menu__list">
        {
          menu.map(({ image, text }) => {
            const isSelected = image === currentPage
            const imagePath = `/images/menuIcons/${isSelected ? "selected/" : "idle/"}/${image}.svg`;

            return (
              <li key={image} className={`list-item ${isSelected ? "list-item_selected" : ""}`}>
                <button
                  className="list-item__button"
                  onClick={() => {
                    setCurrentPage(image);
                  }}
                >
                  <img src={imagePath} />
                  <p className="list-item__text">
                    {text}
                  </p>
                </button>
              </li>
            );
          })
        }
      </ul>
      <div className="special">
        <h2 className="special__heading">
          Учитесь бесплатно
        </h2>
        <p className="special__text">
          Приводите друзей с детьми заниматься в Sirius Future <br/>и получайте подарки!
        </p>
        <button
          className="special__button"
          type="button"
        >
          Узнать
        </button>
        <img className="special__image" src="/images/menu/special/gift.svg" alt="Подарок" />
      </div>
    </div>
  );
};

export default memo(Menu);
