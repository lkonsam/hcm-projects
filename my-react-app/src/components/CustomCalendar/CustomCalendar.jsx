import { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { Tooltip } from "react-tooltip";

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function ShowHoliday({ children, comment, id }) {
  return (
    <>
      <span data-tooltip-id={id} data-tooltip-content={comment}>
        {children}
      </span>
      <Tooltip id={id} effect="solid" />
    </>
  );
}

export default function CustomCalendar({ holidays }) {
  let today = startOfToday();
  // let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function ShowDate() {
    return (
      <>
        {days.map((day, idx) => {
          const dateString = format(day, "yyyy-MM-dd");
          const holiday = holidays[dateString];

          return (
            <div
              key={dateString}
              className={`${idx === 0 && colStartClasses[getDay(day)]} py-1.5`}
            >
              <button
                type="button"
                // onClick={() => setSelectedDay(day)}
                className={`
                        flex h-9 w-9 mx-auto items-center justify-center rounded-full
                        ${
                          holiday
                            ? holiday.type === "public_holiday"
                              ? "bg-red-200"
                              : "bg-yellow-200"
                            : ""
                        }
                        hover:bg-gray-200 transition
                      `}
              >
                {holiday ? (
                  <ShowHoliday
                    comment={holiday.comment}
                    id={`tooltip-${dateString}`}
                  >
                    <time dateTime={dateString}>{format(day, "d")}</time>
                  </ShowHoliday>
                ) : (
                  <time dateTime={dateString}>{format(day, "d")}</time>
                )}
              </button>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="w-full">
      {/* Top prev month year next  */}
      <div className="flex items-center justify-around">
        <button
          onClick={previousMonth}
          className="p-2 text-gray-500 hover:text-gray-700"
        >
          <MdKeyboardDoubleArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>

        <button
          onClick={nextMonth}
          className="p-2 text-gray-500 hover:text-gray-700"
        >
          <MdKeyboardDoubleArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Days of the week  */}
      <div className="grid grid-cols-7 mt-6 text-xs text-center text-gray-500">
        <div>Sun</div> <div>Mon</div> <div>Tue</div> <div>Wed</div>
        <div>Thu</div> <div>Fri</div> <div>Sat</div>
      </div>
      {/* date of the month */}
      <div className="grid grid-cols-7 mt-2 text-sm">
        <ShowDate />
      </div>

      {/* Legend */}
      <div className="flex items-center mt-6 space-x-4">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-300 rounded-full"></span>
          <span>Holiday</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
          <span>Restricted Holiday</span>
        </div>
      </div>
    </div>
  );
}
