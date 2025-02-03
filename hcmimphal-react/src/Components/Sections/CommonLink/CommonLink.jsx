import React, { useEffect, useState } from "react";
import { fetchCommonLinks } from "../../../Api/api";
import CommonLinkCard from "./CommonLinkCard";
import { Box, Container, Grid } from "@mui/material";

export default function CommonLink() {
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    fetchCommonLinks().then((data) => setLinkData(data));
  }, []);

  return (
    <Box sx={{ bgcolor: "var(--color-theme-bg)" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {linkData?.map((ele, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <CommonLinkCard
                icon={ele.icon}
                link={ele.link}
                title={ele.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
