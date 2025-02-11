import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Tooltip } from "react-tooltip";
import CustomCalendar from "../../CustomCalendar/CustomCalendar";

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
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          High Court of Manipur
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The High Court of Manipur was established on .... write some summary
          here.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition">
          Read More
        </button>
      </div>

      {/* Right Section (Calendar) */}
      <div className="md:w-1/2 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Holiday Calendar
        </h2>
        <div className="w-full flex justify-center">
          <CustomCalendar holidays={holidays} />
        </div>
      </div>
    </div>
  );
}
