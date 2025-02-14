/** HomePage.jsx */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../components/Section/Header/Header";
import TopHeader from "../components/Section/Header/TopHeader";
import Hero from "../components/Section/Hero/Hero";
import NoticeMarqueue from "../components/Section/NoticeMarqueue/NoticeMarqueue";
import CommonLink from "../components/Section/CommonLink/CommonLink";
import { BreakpointProvider } from "../context/BreakpointContext";
import NewsSection from "../components/Section/NewsSection/NewsSection";
import HolidaySection from "../components/Section/HolidaySection/HolidaySection";
import JudgeSection from "../components/Section/JudgeSection/JudgeSection";
import FooterSection from "../components/Section/FooterSection/FooterSection";
import ContactUs from "../components/Section/ContactUs/ContactUs";
import GovtIconSection from "../components/Section/GovtIconSection/GovtIconSection";

export default function HomePage() {
  return (
    <>
      <BreakpointProvider>
        <div className="bg-orange-100 text-gray-800 dark:bg-gray-800  dark:text-gray-100">
          <TopHeader />
        </div>
        <div className="w-full md:max-w-9/10 mx-auto  dark:bg-gray-900 dark:text-white">
          <div className="bg-gray-50">
            <Header />
            <Hero />
            <NoticeMarqueue />
          </div>
          <div className="bg-orange-100">
            <CommonLink />
          </div>
          <div className="bg-orange-50">
            <NewsSection />
          </div>
          <div className="bg-orange-100">
            <HolidaySection />
          </div>
          <div className="bg-orange-50">
            <JudgeSection />
          </div>
          <div className="bg-orange-100">
            <ContactUs />
          </div>
        </div>
        <GovtIconSection />
        <FooterSection />
      </BreakpointProvider>
    </>
  );
}
