import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchNewsList } from "../api/api";
import Table from "../components/Table/Table";

export default function NewsList() {
  const [searchParams] = useSearchParams();
  const [newsList, setNewsList] = useState([]);
  const headerId = searchParams.get("s");

  useEffect(() => {
    if (headerId) {
      fetchNewsList(headerId).then((data) => setNewsList(data));
    }
  }, [headerId]);

  const headers = [
    { label: "Sl. No.", field: "serial", sortable: false },
    { label: "Date", field: "date", sortable: true },
    { label: "Body", field: "body", sortable: true },
    { label: "PDF", field: "pdf", sortable: false },
  ];

  const fields = ["serial", "date", "body", "pdf"];

  return (
    <div className="dark:bg-gray-900 py-5">
      <div className="w-full md:max-w-9/10 mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
          News List
        </h2>

        {/* Pass data, headers, and fields to the Table */}
        <Table data={newsList} headers={headers} fields={fields} />
      </div>
    </div>
  );
}
