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
        <div className="bg-orange-50">
          <TopHeader />
        </div>
        <div className="w-full max-w-9/10 mx-auto">
          <div className="">
            <Header />
          </div>
          <div className="bg-orange-50">
            <Hero />
          </div>
          <div className="bg-orange-50">
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
