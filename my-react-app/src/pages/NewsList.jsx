import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchNewsList } from "../api/api";

export default function NewsList() {
  const [searchParams] = useSearchParams();
  const [newsList, setNewsList] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const headerId = searchParams.get("s");

  useEffect(() => {
    if (headerId) {
      fetchNewsList(headerId).then((data) => setNewsList(data));
    }
  }, [headerId]);

  const sortData = (field) => {
    const order = sortedField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortedField(field);
    setSortOrder(order);

    const sortedData = [...newsList].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setNewsList(sortedData);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = newsList.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  return (
    <div className="w-full md:max-w-9/10 mx-auto  dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        News List
      </h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th
              className="px-4 py-2 border-b cursor-pointer"
              onClick={() => sortData("slNo")}
            >
              Sl. No.
            </th>
            <th
              className="px-4 py-2 border-b cursor-pointer"
              onClick={() => sortData("date")}
            >
              Date
            </th>
            <th
              className="px-4 py-2 border-b cursor-pointer"
              onClick={() => sortData("title")}
            >
              Title
            </th>
            <th className="px-4 py-2 border-b">Body</th>
            <th className="px-4 py-2 border-b">PDF</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b text-center">
                {startIndex + index + 1}
              </td>
              <td className="px-4 py-2 border-b text-center">{item.date}</td>
              <td className="px-4 py-2 border-b text-left">{item.title}</td>
              <td className="px-4 py-2 border-b text-left">{item.body}</td>
              <td className="px-4 py-2 border-b text-center">
                {item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View PDF
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 bg-gray-200 rounded-md ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 bg-gray-200 rounded-md ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
