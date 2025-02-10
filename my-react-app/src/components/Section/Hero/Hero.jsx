import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchHeroData } from "../../../api/api";

export default function Hero() {
  const [heroData, setHeroData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchHeroData().then((data) => setHeroData(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 3000); // Auto-play every 3 seconds

    return () => clearInterval(interval);
  }, [heroData]);

  if (!heroData.length) return null;

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {heroData.map((data, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-5 bg-black bg-opacity-10 p-5 rounded-lg text-white">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-lg">{data.description}</p>
            <Link to={data.link} className="text-white no-underline">
              <button className="mt-3 px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg">
                {data.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
