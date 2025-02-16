import { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function Table({ data, headers, fields }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const itemsPerPage = 10; // Number of rows per page

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle pagination logic
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    setPaginatedData(data.slice(startIndex, startIndex + itemsPerPage));
  }, [currentPage, data]);

  // Generate page numbers
  useEffect(() => {
    const range = 2;
    const arr = [1];
    if (currentPage - range > 2) arr.push("...");
    for (
      let i = Math.max(2, currentPage - range);
      i <= Math.min(totalPages - 1, currentPage + range);
      i++
    ) {
      arr.push(i);
    }
    if (currentPage + range < totalPages - 1) arr.push("...");
    if (totalPages > 1) arr.push(totalPages);
    setPageNumbers(arr);
  }, [currentPage, totalPages]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {/* Render Table */}
      <table className="min-w-full bg-white dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-4 py-2 border-b ${
                  header.sortable ? "cursor-pointer hover:underline" : ""
                }`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {fields.map((field, fieldIndex) => (
                <td key={fieldIndex} className="px-4 py-2 border-b text-center">
                  {/* Check if the field is 'serial' to auto-generate Sl. No. */}
                  {field === "serial"
                    ? (currentPage - 1) * itemsPerPage + index + 1
                    : row[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageNumbers={pageNumbers}
      />
    </div>
  );
}
