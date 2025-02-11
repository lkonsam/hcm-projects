import { useEffect, useState } from "react";
import { fetchNoticeMarqueue } from "../../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function NoticeMarqueue() {
  const [noticeData, setNoticeData] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    fetchNoticeMarqueue().then((data) => setNoticeData(data));
  }, []);

  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };

  return (
    <div className="flex flex-col items-center w-full py-6 my-1 rounded bg-gray-100">
      <div className="grid grid-cols-10 items-center">
        <div className="col-span-2 text-lg font-bold border-secondary border-r-4 text-right pr-6">
          What's New
        </div>
        <div
          className="col-span-8 ps-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            onSwiper={setSwiperInstance} // Save Swiper instance
          >
            {noticeData?.map((ele, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={ele.link}
                  className="text-base transition-all duration-500 hover:text-theme hover:text-lg"
                >
                  {ele.title}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
