import { useEffect, useMemo, useState } from "react";
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
  isToday,
  parse,
  startOfToday,
} from "date-fns";

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default function HolidayCalendar({ holidays }) {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = useMemo(
    () => parse(currentMonth, "MMM-yyyy", new Date()),
    [currentMonth]
  );

  const days = useMemo(() => {
    return eachDayOfInterval({
      start: firstDayCurrentMonth,
      end: endOfMonth(firstDayCurrentMonth),
    });
  }, [firstDayCurrentMonth]);

  const [hoveredDay, setHoveredDay] = useState(null);

  function previousMonth() {
    setCurrentMonth((prev) =>
      format(
        add(parse(prev, "MMM-yyyy", new Date()), { months: -1 }),
        "MMM-yyyy"
      )
    );
  }

  function nextMonth() {
    setCurrentMonth((prev) =>
      format(
        add(parse(prev, "MMM-yyyy", new Date()), { months: 1 }),
        "MMM-yyyy"
      )
    );
  }

  return (
    <div className="w-full">
      {/* Header with Month & Navigation */}
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

      {/* Days of the week */}
      <div className="grid grid-cols-7 mt-6 text-xs text-center text-gray-500">
        <div>Sun</div> <div>Mon</div> <div>Tue</div> <div>Wed</div>
        <div>Thu</div> <div>Fri</div> <div>Sat</div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 mt-2 text-sm">
        {days.map((day, idx) => {
          const dateString = format(day, "yyyy-MM-dd");
          const holiday = holidays[dateString];
          const isTodayDate = isToday(day);
          const isHovered = hoveredDay === dateString;

          return (
            <div
              key={dateString}
              className={`${
                idx === 0 && colStartClasses[getDay(day)]
              } py-1.5 relative`}
              onMouseEnter={() => setHoveredDay(dateString)}
              onMouseLeave={() => setHoveredDay(null)}
              onTouchStart={() => setHoveredDay(dateString)} // Mobile support
            >
              <button
                type="button"
                className={`
                  flex h-9 w-9 mx-auto items-center justify-center rounded-full
                  ${
                    holiday
                      ? holiday.type === "public_holiday"
                        ? "bg-red-200"
                        : "bg-yellow-200"
                      : ""
                  }
                  ${isTodayDate ? "border-2 border-blue-500" : ""}
                  hover:bg-gray-200 transition relative
                `}
              >
                <time dateTime={dateString}>{format(day, "d")}</time>
              </button>

              {/* Tooltip for holidays */}
              {holiday && isHovered && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-2 rounded shadow-lg z-10 w-max">
                  {holiday.comment}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center mt-6 space-x-4">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-300 rounded-full"></span>
          <span>Public Holiday</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
          <span>Restricted Holiday</span>
        </div>
      </div>
    </div>
  );
}
