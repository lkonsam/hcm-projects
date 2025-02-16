import PropTypes from "prop-types";

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  pageNumbers: PropTypes.number.isRequired,
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  pageNumbers,
}) {
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 dark:bg-gray-700 opacity-50 cursor-not-allowed"
            : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        }`}
      >
        Previous
      </button>

      <div className="flex items-center mx-4 space-x-1">
        {pageNumbers.map((page, index) => (
          <span key={index}>
            {page === "..." ? (
              <span className="px-3 py-1 text-gray-600 dark:text-gray-400">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 rounded-md ${
                  page === currentPage
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {page}
              </button>
            )}
          </span>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 dark:bg-gray-700 opacity-50 cursor-not-allowed"
            : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        }`}
      >
        Next
      </button>
    </div>
  );
}
