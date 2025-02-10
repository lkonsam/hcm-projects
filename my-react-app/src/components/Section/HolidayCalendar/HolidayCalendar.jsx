import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Tooltip } from "react-tooltip";

const holidays = {
  "2025-02-21": { type: "public_holiday", comment: "State Foundation Day" },
  "2025-03-08": { type: "restricted_holiday", comment: "Women's Day" },
  "2025-04-14": { type: "public_holiday", comment: "Ambedkar Jayanti" },
  "2025-05-01": { type: "public_holiday", comment: "Labour Day" },
  "2025-08-15": { type: "public_holiday", comment: "Independence Day" },
  "2025-10-02": { type: "public_holiday", comment: "Gandhi Jayanti" },
  "2025-12-25": { type: "public_holiday", comment: "Christmas Day" },
};

export default function HolidayCalendar() {
  const [value, setValue] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      if (holidays[dateString]) {
        return holidays[dateString].type === "public_holiday"
          ? "border-red-500"
          : "border-yellow-500";
      }
    }
    return null;
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      if (holidays[dateString]) {
        return (
          <div
            data-tooltip-id={`tooltip-${dateString}`}
            data-tooltip-content={holidays[dateString].comment}
          />
        );
      }
    }
    return null;
  };

  return (
    <div className="w-full flex">
      {/* Left Section */}
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">High Court of Manipur</h2>
        <p>
          The High Court of Manipur was established on .... write some summary
          here.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Read More
        </button>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white shadow-lg rounded-lg flex flex-col items-center p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Holiday Calendar</h2>
        <Calendar />
        {/* Legend */}
        <div className="mt-4 flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-red-100 rounded-full border border-red-500"></span>
            Public Holiday
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-100 rounded-full border border-yellow-500"></span>
            Restricted Holiday
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <Tooltip id="tooltip" />
    </div>
  );
}
