import { useState, useMemo, useEffect } from "react";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";

Table.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
      className: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string, // Added prop type for custom className
};

export default function Table({ data, headers, className = "" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: null,
  });
  const [pageNumbers, setPageNumbers] = useState([]);
  const itemsPerPage = 10; // Number of rows per page

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle sorting using useMemo to avoid recomputation
  const sortedData = useMemo(() => {
    if (sortConfig.field) {
      return [...data].sort((a, b) => {
        const aValue = a[sortConfig.field] ?? "";
        const bValue = b[sortConfig.field] ?? "";
        if (sortConfig.direction === "asc") {
          return aValue > bValue ? 1 : -1;
        } else if (sortConfig.direction === "desc") {
          return aValue < bValue ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  // Paginate data based on sorted data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, sortedData]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSort = (field) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.field === field) {
        // Toggle between ascending, descending, and no sort
        return {
          field,
          direction:
            prevConfig.direction === "asc"
              ? "desc"
              : prevConfig.direction === "desc"
              ? null
              : "asc",
        };
      }
      return { field, direction: "asc" }; // Default to ascending
    });
  };

  // Generate page numbers
  useEffect(() => {
    const range = 1;
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

  return (
    <div>
      {/* Render Table */}
      <table
        className={`min-w-full bg-white dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 ${className}`}
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                onClick={() => header.sortable && handleSort(header.field)}
                className={`px-4 py-2 border-b  ${
                  header.sortable ? "cursor-pointer hover:underline" : ""
                } ${header.className}`}
              >
                <div className="flex justify-center items-center">
                  <span>{header.label}</span>
                  {header.sortable && sortConfig.field === header.field && (
                    <span>
                      {sortConfig.direction === "asc" && <IoMdArrowUp />}
                      {sortConfig.direction === "desc" && <IoMdArrowDown />}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {headers.map((header, fieldIndex) => (
                <td
                  key={fieldIndex}
                  className={`px-4 py-2 border-b text-center  ${header.className}`}
                >
                  {header.field === "serial" ? (
                    (currentPage - 1) * itemsPerPage + index + 1
                  ) : header.field === "pdf" && row[header.field] ? (
                    <a
                      href={row[header.field]}
                      download
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400"
                      title="Download PDF"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      pdf
                    </a>
                  ) : (
                    row[header.field] || "-"
                  )}
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
