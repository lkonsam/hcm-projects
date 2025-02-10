import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const holidays = {
  "2025-02-21": { type: "Public Holiday", comment: "State Foundation Day" },
  "2025-03-08": { type: "Restricted Holiday", comment: "Women's Day" },
  "2025-04-14": { type: "Public Holiday", comment: "Ambedkar Jayanti" },
  "2025-05-01": { type: "Public Holiday", comment: "Labour Day" },
  "2025-08-15": { type: "Public Holiday", comment: "Independence Day" },
  "2025-10-02": { type: "Public Holiday", comment: "Gandhi Jayanti" },
  "2025-12-25": { type: "Public Holiday", comment: "Christmas Day" },
};

export default function HolidayCalendar() {
  const [value, setValue] = useState(new Date());

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      if (holidays[dateString]) {
        return (
          <div
            data-tip={holidays[dateString].comment}
            className={
              holidays[dateString].type === "Public Holiday"
                ? "bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto"
                : "bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto"
            }
          >
            ●
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Holiday Calendar</h2>
      <Calendar onChange={setValue} value={value} tileContent={tileContent} />
      <ReactTooltip effect="solid" place="top" />
    </div>
  );
}
