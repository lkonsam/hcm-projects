import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useBreakpoint } from "../../../context/BreakpointContext";
import { fetchJudges } from "../../../api/api";

/**
 * 
 * //dummy data
 *  const data = [
    {
      judge_id: 1,
      name: "D. Krishnakumar",
      title: "Hon'ble Mr. Justice",
      post: "Chief Justice",
      image: "/Judges/justice_1.png",
    },
    {
      judge_id: 2,
      name: "Ahanthem Bimol Singh",
      title: "Hon'ble Mr. Justice",
      post: "Justice",
      image: "/Judges/justice_2.png",
    },
    {
      judge_id: 3,
      name: "A. Guneshwar Sharma",
      title: "Hon'ble Mr. Justice",
      post: "Justice",
      image: "/Judges/justice_3.jpg",
    },
    {
      judge_id: 4,
      name: "Golmei Gaiphulshillu Kabui",
      title: "Hon'ble Mrs. Justice",
      post: "Justice",
      image: "/Judges/justice_4.jpg",
    },
  ];
 */

export default function JudgeSection() {
  const [judges, setJudges] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const breakpoint = useBreakpoint(); // Get breakpoint value
  const [slideNumber, setSlideNumber] = useState(4);

  useEffect(() => {
    const limit = { xs: 1, sm: 2, md: 3 }[breakpoint] || 4;
    console.log(limit);
    setSlideNumber(limit);
  }, [breakpoint]);

  useEffect(() => {
    fetchJudges().then((data) => setJudges(data));
  }, []);

  return (
    <div
      className="w-full py-10 bg-gray-100"
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
        <p className="text-gray-600 text-sm">{ele.post}</p>
      </div>
    </div>
  );
}
