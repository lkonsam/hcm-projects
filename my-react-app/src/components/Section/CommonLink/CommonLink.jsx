import React, { useEffect, useState } from "react";
import { fetchCommonLinks } from "../../../api/api";
import { Link } from "react-router-dom";
import { useBreakpoint } from "../../../context/BreakpointContext";

export default function CommonLink() {
  const [linkData, setLinkData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [collapse, setCollapse] = useState(true);
  const breakpoint = useBreakpoint(); // Get breakpoint value

  useEffect(() => {
    fetchCommonLinks().then((data) => setLinkData(data));
  }, []);

  useEffect(() => {
    if (collapse) {
      const limit = { xs: 2, sm: 3, md: 4, lg: 6 }[breakpoint] || 6;
      setFilterData(linkData.slice(0, limit));
    } else {
      setFilterData(linkData);
    }
  }, [linkData, collapse, breakpoint]);

  return (
    <div className="bg-theme-bg py-6">
      <div className="container mx-auto px-4">
        <h2 className="w-full text-2xl font-bold text-gray-400 italic mb-4">
          Frequently Visited Links:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filterData?.map((ele, index) => (
            <CommonLinkCard
              key={index}
              icon={ele.icon}
              link={ele.link}
              title={ele.title}
            />
          ))}
        </div>
        <button
          onClick={() => setCollapse(!collapse)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {collapse ? "See All" : "Collapse"}
        </button>
      </div>
    </div>
  );
}

function CommonLinkCard({ icon, title, link }) {
  return (
    <Link to={link} className="block text-inherit no-underline">
      <div
        className="flex flex-col items-center justify-center p-4 border border-secondary rounded-lg bg-gray-100
      dark:bg-white dark:text-gray-800 transition-all duration-300 hover:shadow-md hover:bg-gray-200 h-[135px]"
      >
        <img src={icon} alt={title} className="w-8 h-8" />
        <p className="text-sm text-center mt-2">{title}</p>
      </div>
    </Link>
  );
}
