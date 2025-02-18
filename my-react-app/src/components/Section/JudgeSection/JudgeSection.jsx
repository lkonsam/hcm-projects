import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useBreakpoint } from "../../../context/BreakpointContext";
import { fetchJudges } from "../../../api/api";

export default function JudgeSection() {
  const [judges, setJudges] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const breakpoint = useBreakpoint(); // Get breakpoint value
  const [slideNumber, setSlideNumber] = useState(4);

  useEffect(() => {
    const limit = { xs: 1, sm: 2, md: 3 }[breakpoint] || 4;
    setSlideNumber(limit);
  }, [breakpoint]);

  useEffect(() => {
    fetchJudges().then((data) => setJudges(data));
  }, []);

  return (
    <div
      className="w-full py-10 "
      onMouseEnter={() => swiperInstance?.autoplay.stop()}
      onMouseLeave={() => swiperInstance?.autoplay.start()}
    >
      <div className="w-full px-4">
        <h2 className="w-full  text-3xl font-bold text-gray-400 mb-6  border-b border-gray-300 pb-4">
          Did You Know...
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
          {judges?.map((ele, index) => (
            <SwiperSlide key={index}>
              <JudgesCard ele={ele} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function JudgesCard({ ele }) {
  return (
    <div
      className="text-center border border-gray-300 rounded-lg 
            overflow-hidden p-3 bg-gradient-to-br from-gray-100
            to-gray-300"
    >
      <img
        src={ele.image}
        alt={ele.name}
        className="w-[120px] h-auto mx-auto border border-gray-500 shadow-md"
      />
      <div className="mt-3">
        <h6 className="font-bold text-gray-800 text-lg">{ele.title}</h6>
        <p className="font-black text-gray-800 text-sm">{ele.name}</p>
        <p className="text-gray-600 text-sm">{ele.post}</p>
      </div>
    </div>
  );
}
