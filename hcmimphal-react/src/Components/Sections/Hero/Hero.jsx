import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "swiper/css";
import { useEffect, useState } from "react";
import { fetchHeroData } from "../../../Api/api";

export default function Hero() {
  const [heroData, setHeroData] = useState([]);
  useEffect(() => {
    fetchHeroData().then((data) => setHeroData(data));
  }, []);

  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop>
      {heroData?.map((data, index) => (
        <SwiperSlide key={index}>
          <Box position="relative">
            <Box
              component="img"
              src={data.img}
              alt={data.title}
              width="100%"
              height={{ xs: "300px", md: "500px" }}
              sx={{ objectFit: "cover" }}
            />

            <Box
              position="absolute"
              bottom="5%"
              left="5%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              color="white"
              p={3}
              sx={{
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h3" component="h1" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="h6" component="p" gutterBottom>
                {data.description}
              </Typography>
              <Link to={data.link} style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large" disableElevation>
                  {data.buttonText}
                </Button>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
