import "react-calendar/dist/Calendar.css";
import HolidayCalendar from "../../HolidayCalendar/HolidayCalendar";
import { fetchHolidays } from "../../../api/api";
import { useEffect, useState } from "react";

export default function HolidaySection() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetchHolidays().then((data) => setHolidays(data));
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 p-6 shadow-md">
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
          {holidays && <HolidayCalendar holidays={holidays} />}
        </div>
      </div>
    </div>
  );
}
