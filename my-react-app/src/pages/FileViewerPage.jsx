import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai"; // Import icons
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
  const [zoomLevel, setZoomLevel] = useState(1); // Zoom level state
  const [containerWidth, setContainerWidth] = useState(window.innerWidth * 0.9); // Responsive width

  const file_id = searchParams.get("s");

  useEffect(() => {
    // Fetch the PDF file and set it in state
    fetchPdfFile(file_id).then((file) => setPdfFile(file)); // Simulated API call

    // Update container width on window resize
    const handleResize = () => {
      setContainerWidth(window.innerWidth * 0.9); // 90% of window width
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 2)); // Cap zoom level at 2x
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 0.5)); // Minimum zoom level at 0.5x
  };

  return (
    <div className="w-full md:w-9/10 mx-auto my-4 bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white py-4 flex items-center justify-between px-4 sm:px-6">
        {/* Navigation Buttons */}
        <h1 className="text-base sm:text-lg font-semibold">PDF Viewer</h1>

        {/* Zoom Controls */}
        <div className="flex items-center space-x-2">
          <button
            className="p-2 bg-gray-700 rounded-full"
            onClick={zoomOut}
            disabled={zoomLevel <= 0.5}
          >
            <AiOutlineZoomOut size={20} className="text-white" />
          </button>
          <span className="text-sm">{Math.round(zoomLevel * 100)}%</span>
          <button
            className="p-2 bg-gray-700 rounded-full"
            onClick={zoomIn}
            disabled={zoomLevel >= 2}
          >
            <AiOutlineZoomIn size={20} className="text-white" />
          </button>
        </div>
      </header>

      {/* Main Viewer */}
      <div className="flex-grow flex items-center justify-center w-full bg-white dark:bg-gray-800 shadow-xl  p-4 sm:p-6 ">
        {pdfFile ? (
          <div
            className={`w-full transition-transform duration-500 ${
              isAnimating ? "animate-book-open" : ""
            }`}
            style={{ width: containerWidth }} // Set responsive width
          >
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              className="w-full flex justify-center"
            >
              <Page
                pageNumber={currentPage}
                scale={zoomLevel}
                width={containerWidth} // Set responsive width for the PDF page
              />
            </Document>
          </div>
        ) : (
          <p>Loading PDF...</p>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4 flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 bg-gray-700 rounded-lg text-sm sm:text-base"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p className="text-sm">
          Page {currentPage} of {numPages}
        </p>
        <button
          className="px-4 py-2 bg-gray-700 rounded-lg text-sm sm:text-base"
          onClick={goToNextPage}
          disabled={currentPage === numPages}
        >
          Next
        </button>
      </footer>
    </div>
  );
}
