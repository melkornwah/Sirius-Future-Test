import React, { memo } from "react";
import "./balance.scss";

const lessonsData = [
  {
    "name": "Ментальная Арифметика",
    "value": 32,
  },
  {
    "name": "Программирование",
    "value": 0,
  },
  {
    "name": "Скорочтение",
    "value": 4,
  },
  {
    "name": "Таблица умножения",
    "value": 1,
  },
  {
    "name": "Подготовка к школе",
    "value": 5,
  },
]

const Balance = () => {
  return (
    <div className="balance">
      <h2 className="balance__heading">
        Баланс занятий
      </h2>
      <div className="balance__lesson-list">
        {
          lessonsData.map(({ name, value }) => {
            return (
              <div key={name} className="balance__lesson">
                <div className="balance__lesson-container">
                  <p className="lesson__name">
                    {name}
                  </p>
                  <div className="lesson__circle">
                    <p className="lesson__value">
                      {value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
      <div className="balance__button-container">
        <button
          className="button button_purple balance__button"
          type="button"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default memo(Balance);
