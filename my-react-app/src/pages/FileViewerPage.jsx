import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { fetchPdfFile } from "../api/api";

// Set the worker source explicitly
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

export default function FileViewerPage() {
  const [searchParams] = useSearchParams();
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const file_id = searchParams.get("s");

  useEffect(() => {
    // Fetch the PDF file and set it in state
    fetchPdfFile(file_id).then((file) => setPdfFile(file)); // Simulated API call
  }, [file_id]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(1); // Reset to first page on new document load
  };

  const goToNextPage = () => {
    if (currentPage < numPages) {
      triggerPageAnimation();
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      triggerPageAnimation();
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const triggerPageAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Animation duration (0.5 seconds)
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white py-4 flex justify-between px-6">
        <button
          className="px-4 py-2 bg-gray-700 rounded-lg"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <h1 className="text-lg font-semibold">PDF Viewer</h1>
        <button
          className="px-4 py-2 bg-gray-700 rounded-lg"
          onClick={goToNextPage}
          disabled={currentPage === numPages}
        >
          Next
        </button>
      </header>

      {/* Main Viewer */}
      <div className="flex-grow flex items-center justify-center w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 my-6">
        {pdfFile ? (
          <div
            className={`w-full transition-transform duration-500 ${
              isAnimating ? "animate-book-open" : ""
            }`}
          >
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              className="w-full"
            >
              <Page pageNumber={currentPage} width={800} />
            </Document>
          </div>
        ) : (
          <p>Loading PDF...</p>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4 flex flex-col items-center">
        <div className="mb-2 flex items-center">
          <button
            className="px-4 py-2 bg-gray-700 rounded-lg mr-2"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <p className="text-sm">
            Page {currentPage} of {numPages}
          </p>
          <button
            className="px-4 py-2 bg-gray-700 rounded-lg ml-2"
            onClick={goToNextPage}
            disabled={currentPage === numPages}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}
