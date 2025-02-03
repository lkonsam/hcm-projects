import { useEffect, useState } from "react";
import { fetchNoticeMarqueue } from "../../../Api/api";
import { Box, Grid, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function NoticeMarqueue() {
  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    fetchNoticeMarqueue().then((data) => setNoticeData(data));
  }, []);

  return (
    <Stack>
      <Grid container alignItems="center" spacing={3} sx={{ padding: 2 }}>
        {/* "What's New" Section */}
        <Grid item xs={3} textAlign="right">
          <Box
            component="h2"
            fontSize={20}
            fontWeight="bold"
            sx={{
              borderRight: "5px solid var(--color-secondary)",
              paddingRight: 2,
            }}
            mb={0}
          >
            What's New
          </Box>
        </Grid>

        {/* Notice Marquee Section */}
        <Grid item xs={9} textAlign="left">
          <Swiper
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
          >
            {noticeData?.map((ele, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={ele.link}
                  style={{
                    textDecoration: "none", // Removes underline
                    color: "inherit", // Ensures color matches the theme
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "16px",
                      transition: "all 0.3s ease", // Smooth transition
                      "&:hover": {
                        color: "var(--color-theme)", // Change color on hover
                        fontSize: "18px", // Increase font size on hover
                      },
                    }}
                  >
                    {ele.title}
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Stack>
  );
}
