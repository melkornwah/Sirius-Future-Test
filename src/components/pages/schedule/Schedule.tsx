import React, { memo } from "react";
import Lesson from "./lesson/Lesson";
import "./schedule.scss";
import setDataToMonth from "./calendar";

const weekdays = [
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
  "Вс",
];

const Schedule = () => {
  const currentMonth = "Март";
  const monthForCalendar = "марта";

  const previousMonthData = {
    firstDay: 26,
    lastDay: 29,
  };

  const currentMonthData = {
    lastDay: 31,
  };

  const month = setDataToMonth(previousMonthData, currentMonthData);

  return (
    <div className="schedule">
      <div className="schedule__controls">
        <button
          className="schedule__lesson"
          type="button"
        >
          Выбрать предмет
          <img className="schedule__dropdown-icon" src="images/schedule/dropdown.svg" alt="↓" />
        </button>
        <div className="schedule__change">
          <button
            className="button button_purple"
            type="button"
          >
            Изменить расписание
          </button>
        </div>
      </div>
      <div className="schedule__calendar">
        <div className="schedule__calendar-control">
          <div className="schedule__calendar-month">
            <button
              className="month__button"
              type="button"
            >
              <img className="month__button-icon" src="images/schedule/arrow.svg" alt="Назад" />
            </button>
            <h2
              className="schedule__current-month"
            >
              {currentMonth} 2024
            </h2>
            <button
              className="month__button month__button_next"
              type="button"
            >
              <img className="month__button-icon" src="images/schedule/arrow.svg" alt="Вперёд" />
            </button>
          </div>
          <div className="schedule__control-addition">
            <button
              className="schedule__today"
              type="button"
            >
              Сегодня
            </button>
            <button
              className="schedule__faq"
              type="button"
            >
              <img className="schedule__faq-icon" src="images/schedule/faq.svg" alt="?" />
            </button>
          </div>
        </div>
        <div className="schedule__calendar-container">
          <div className="schedule__weekdays">
            {
              weekdays.map(( day ) => {
                return (
                  <h3 key={day} className="schedule__weekday">
                    {day}
                  </h3>
                );
              })
            }
          </div>
          <div className="schedule__days">
            {
              month.map(({ day, previousMonth, coloredDay, lessons }) => {
                const key = `${previousMonth ? "previous_" : ""}month_${day}`;

                return (
                  <div
                    key={key}
                    className={`day ${previousMonth ? "day_old" : ""} ${coloredDay ? "day_colored" : ""}`}
                  >
                    <div className="day__container">
                      <h4 className="day__number">
                        {day}
                        {
                          !previousMonth && day < 3
                            ? ` ${monthForCalendar}` 
                            : ""
                        }
                      </h4>
                      <ul className="day__lessons">
                        {
                          lessons && lessons.length ? lessons.map((lessonProps, i) => {
                            return (
                              <Lesson
                                index={i}
                                {...lessonProps}
                              />
                            );
                          }) : null
                        }
                      </ul>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Schedule);
