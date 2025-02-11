import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useBreakpoint } from "../../../context/BreakpointContext";
import { fetchGovtLinks } from "../../../api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GovtIconSection() {
  const breakpoint = useBreakpoint();
  const [slideNumber, setSlideNumber] = useState(4);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const limit = { xs: 2, sm: 3, md: 4 }[breakpoint] || 4;
    console.log(limit);
    setSlideNumber(limit);
  }, [breakpoint]);

  useEffect(() => {
    fetchGovtLinks().then((data) => setMyData(data));
  }, []);

  return (
    <div className="w-full py-6">
      <Swiper
        slidesPerView={slideNumber}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full"
      >
        {myData?.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={item.link} className="block w-full h-full">
              <div
                className="flex flex-col items-center justify-center m-4 bg-white shadow-lg rounded-lg  xs:h-30   lg:h-36"
                onMouseEnter={(e) =>
                  e.target.closest(".swiper")?.swiper.autoplay.stop()
                }
                onMouseLeave={(e) =>
                  e.target.closest(".swiper")?.swiper.autoplay.start()
                }
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-3/4 h-20 object-contain"
                />
                <p className="mt-2 text-center text-sm font-semibold">
                  {item.name}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
