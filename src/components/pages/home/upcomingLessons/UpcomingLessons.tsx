import React, { memo } from "react";
import "./upcomingLesson.scss";

const lessons = [
  {
    date: {
      day: 1,
      month: "мая",
    },
    lesson: "Ментальная Арифметика",
    time: "14:00-14:25",
    teacher: "Белкина Инна",
    buttonBorder: "#EEEEFF",
  },
  {
    date: {
      day: 30,
      month: "октября",
    },
    lesson: "Программирование",
    time: "11:00-11:11",
    teacher: "Животновская Оксана",
    buttonBorder: "#8D7FC7",
  },
  {
    date: {
      day: 16,
      month: "ноября",
    },
    lesson: "Скорочтение",
    time: "09:00-09:45",
    teacher: "Мин Елена",
    buttonBorder: "#8D7FC7",
  },
];

const UpcomingLessons = () => {
  return (
    <div className="upcoming-lesson">
      <h2 className="upcoming-lesson__heading">
        Ближайшие уроки
      </h2>
      <div className="upcoming-lesson__list">
        {
          lessons.map(({ date: { day, month }, lesson, time, teacher, buttonBorder }) => {
            return (
              <div className="lesson">
                <div className="lesson-container">
                  <div className="lesson__date">
                    <h3 className="lesson__day">
                      {day}
                    </h3>
                    <p className="lesson__month">
                      {month}
                    </p>
                  </div>
                  <p className="lesson__name">
                    {lesson}
                  </p>
                  <p className="lesson__time">
                    {time}
                  </p>
                  <div className="lesson__teacher">
                    <img className="lesson__teacher-icon" src="/images/teachers/teacherIcon.svg" alt="Учитель" />
                    <p className="lesson__teacher-name">
                      {teacher}
                    </p>
                  </div>
                  <div className="lesson__buttons">
                    <button
                      className="lesson__button"
                      type="button"
                      style={{
                        border: `1px solid ${buttonBorder}`,
                      }}
                    >
                      Button
                    </button>
                    <button
                      className="lesson__button lesson__button_filled"
                      type="button"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="upcoming-lesson__button-container">
        <button
          className="button button_purple upcoming-lesson__button"
          type="button"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default memo(UpcomingLessons);
