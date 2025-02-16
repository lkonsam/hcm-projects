import { useState, useEffect } from "react";
import { fetchJudges } from "../api/api";

const JudgesPage = () => {
  const [judges, setJudges] = useState([]);

  useEffect(() => {
    // Mock API fetch
    fetchJudges().then((data) => setJudges(data));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Judges Information</h1>
        <div className="space-y-6">
          {judges.map((judge) => (
            <div
              key={judge.judge_id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6"
            >
              {/* Judge Image Frame */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-inner overflow-hidden">
                <img
                  src={judge.image}
                  alt={`${judge.name}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Judge Details */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold">
                  {judge.title} {judge.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {judge.post}
                </p>
                <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
                  <h3 className="text-lg font-medium mb-2">Biography</h3>
                  <ul className="space-y-2">
                    {judge.biography.map(
                      (item, index) =>
                        item.show && (
                          <li key={index} className="text-sm">
                            {item.header && (
                              <span className="font-semibold">
                                {item.header}:{" "}
                              </span>
                            )}
                            <span>{item.value}</span>
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JudgesPage;
