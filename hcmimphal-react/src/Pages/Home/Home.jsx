import { Box, Container } from "@mui/material";
import Hero from "../../Components/Sections/Hero/Hero";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional navigation styles
import "swiper/css/pagination"; // Optional pagination styles
import NoticeMarqueue from "../../Components/Sections/NoticeMarqueue/NoticeMarqueue";
import CommonLink from "../../Components/Sections/CommonLink/CommonLink";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl" sx={{ paddingBottom: "1rem" }}>
        <Hero />
        <NoticeMarqueue />
      </Container>
      <CommonLink />
    </>
  );
}
