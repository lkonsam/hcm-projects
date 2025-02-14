/** HomePage.jsx */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "../components/Section/Hero/Hero";
import NoticeMarqueue from "../components/Section/NoticeMarqueue/NoticeMarqueue";
import CommonLink from "../components/Section/CommonLink/CommonLink";
import NewsSection from "../components/Section/NewsSection/NewsSection";
import HolidaySection from "../components/Section/HolidaySection/HolidaySection";
import JudgeSection from "../components/Section/JudgeSection/JudgeSection";
import ContactUs from "../components/Section/ContactUs/ContactUs";
import GovtIconSection from "../components/Section/GovtIconSection/GovtIconSection";

export default function HomePage() {
  return (
    <>
      <div className="w-full md:max-w-9/10 mx-auto  dark:bg-gray-900 dark:text-white">
        <div className="bg-gray-50 dark:bg-gray-800  dark:text-gray-100 ">
          <Hero />
          <NoticeMarqueue />
        </div>
        <div className="bg-orange-100 dark:bg-gray-900 dark:text-white">
          <CommonLink />
        </div>
        <div className="bg-orange-50 dark:bg-gray-800  dark:text-gray-100">
          <NewsSection />
        </div>
        <div className="bg-orange-100 dark:bg-gray-900 dark:text-white">
          <HolidaySection />
        </div>
        <div className="bg-orange-50 dark:bg-gray-800  dark:text-gray-100">
          <JudgeSection />
        </div>
        <div className="bg-orange-100 dark:bg-gray-900">
          <ContactUs />
        </div>
      </div>
      <GovtIconSection />
    </>
  );
}
