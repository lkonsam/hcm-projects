import { useEffect, useState } from "react";
import { fetchNews } from "../../../api/api";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useBreakpoint } from "../../../context/BreakpointContext";

export default function NewsSection() {
  const [newsData, setNewsData] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const breakpoint = useBreakpoint(); // Get breakpoint value
  const [slideNumber, setSlideNumber] = useState(4);

  useEffect(() => {
    const limit = { xs: 1, sm: 2, md: 3 }[breakpoint] || 4;
    setSlideNumber(limit);
  }, [breakpoint]);

  useEffect(() => {
    fetchNews().then((data) => setNewsData(data));
  }, []);

  return (
    <div
      className="w-full py-10"
      onMouseEnter={() => swiperInstance?.autoplay.stop()}
      onMouseLeave={() => swiperInstance?.autoplay.start()}
    >
      <div className="w-full px-4">
        <h2 className="w-full  text-3xl font-bold text-gray-800 mb-6 text-center border-b  pb-4">
          Latest News
        </h2>
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={setSwiperInstance}
          slidesPerView={slideNumber}
          spaceBetween={20}
          pagination={{ clickable: true }}
          //   navigation={true}
          className="pb-10"
          style={{
            paddingBottom: 40,
          }}
        >
          {newsData?.map((ele, index) => (
            <SwiperSlide key={index}>
              <NewsCard ele={ele} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function NewsCard({ ele }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-5 transition-transform transform hover:scale-101">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b border-gray-300 pb-2">
        {ele?.header}
      </h3>
      <ul className="space-y-3">
        {ele?.data.slice(0, 3).map((item, index) => (
          <li
            key={index}
            className="border-b border-gray-300 pb-2 last:border-none"
          >
            <Link to={`/news/view/${item.news_id}`} className="block">
              <h5 className="text-sm text-gray-500">{item.date}</h5>
              <h3 className="text-md font-medium text-gray-800 hover:text-blue-600">
                {item.body.slice(0, 80)}...
              </h3>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={`/news/list/${ele?.header_id}`}
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
      >
        Read More
      </Link>
    </div>
  );
}
