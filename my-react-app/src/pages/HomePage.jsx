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

export default function HomePage() {
  return (
    <>
      <BreakpointProvider>
        <TopHeader />
        <div className="w-full max-w-9/10 mx-auto">
          <Header />
          <Hero />
          <NoticeMarqueue />
          <CommonLink />
          <NewsSection />
          <HolidaySection />
          <JudgeSection />
        </div>
      </BreakpointProvider>
    </>
  );
}
