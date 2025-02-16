import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGalleries } from "../api/api";

export default function GalleryPage() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const loadGalleries = async () => {
      const data = await fetchGalleries();
      setGalleries(data);
    };
    loadGalleries();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Our Galleries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleries.map((gallery, index) => (
          <Link
            key={index}
            to={`/gallery/images?s=${gallery.id}`}
            className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              src={gallery.img}
              alt={gallery.caption}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2 text-gray-800 dark:text-gray-200">
              {gallery.caption}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(gallery.date).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
