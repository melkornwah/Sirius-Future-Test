type previousMonthDataProps = {
  firstDay: number,
  lastDay: number,
};

type currentMonthDataProps = {
  lastDay: number,
};

type monthDataProps = Array<{
  day: number,
  coloredDay?: boolean,
  previousMonth?: boolean,
  lessons?: Array<{
    time: string,
    lessonName: string,
    status: string,
    outline?: boolean,
    unpaidFor?: boolean,
  }>,
}>;

const getPreviousMonth = (previousMonthData: previousMonthDataProps) => {
  const { firstDay, lastDay } = previousMonthData;

  const previousMonth = [];

  for (let i = firstDay; i <= lastDay; i++) {
    previousMonth.push({
      day: i,
      previousMonth: true,
    });
  };

  return previousMonth;
};

const getCurrentMonth = (currentMonthData: currentMonthDataProps) => {
  const { lastDay } = currentMonthData;

  const currentMonth = [];

  for (let i = 0; i < lastDay; i++) {
    currentMonth.push({
      day: i + 1,
    });
  };

  return currentMonth;
};

const previousMonthLessons = {
  27: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "finished",
      },
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "finished",
        outline: true,
      },
    ],
  },
  28: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "cancelled",
      },
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "cancelled",
        outline: true,
      },
    ],
  },
  29: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "debt",
        unpaidFor: true,
      },
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "debt",
        outline: true,
        unpaidFor: true,
      },
    ],
  },
};

const currentMonthLessons = {
  1: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "available",
      },
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "occupied",
      },
    ],
  },
  2: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
        unpaidFor: true,
      },
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
        outline: true,
        unpaidFor: true,
      },
    ],
  },
  3: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
      },
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
        outline: true,
      },
    ],
  },
  4: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
        unpaidFor: true,
      },
    ],
  },
  6: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
        unpaidFor: true,
      },
    ],
  },
  8: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
        unpaidFor: true,
      },
    ],
  },
  14: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
        unpaidFor: true,
      },
    ],
  },
  15: {
    coloredDay: true,
  },
  16: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
        unpaidFor: true,
      },
    ],
  },
  18: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
      },
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
      },
    ],
  },
  23: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
      },
    ],
  },
  31: {
    lessons: [
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
      },
      {
        time: "13:00-13:45",
        lessonName: "Ментальная арифметика",
        status: "planned",
      },
    ],
  },
};

const setDataToMonth = (previousMonthData: previousMonthDataProps, currentMonthData: currentMonthDataProps) => {
  const monthData: monthDataProps = [];

  const previousMonth = getPreviousMonth(previousMonthData);
  const currentMonth = getCurrentMonth(currentMonthData);

  previousMonth.forEach((day) => {
    if (previousMonthLessons[day.day as keyof typeof previousMonthLessons]) {
      const currentDay = previousMonthLessons[day.day as keyof typeof previousMonthLessons];

      monthData.push({
        ...day,
        ...currentDay,
      });
    } else {
      monthData.push({
        ...day,
      });
    }
  });

  currentMonth.forEach((day) => {
    if (currentMonthLessons[day.day as keyof typeof currentMonthLessons]) {
      const currentDay = currentMonthLessons[day.day as keyof typeof currentMonthLessons];

      monthData.push({
        ...day,
        ...currentDay,
      });
    } else {
      monthData.push({
        ...day,
      });
    }
  });

  return monthData;
};

export default setDataToMonth;
