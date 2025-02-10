import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import FooterLink from "./FooterLink";
import Logo from "../../Logo/Logo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFooter } from "../../../Api/api";

export default function Footer() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    fetchFooter().then((data) => setFooterData(data));
  }, []);

  return (
    <Box bgcolor="primary.theme" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Logo />
              <Stack direction="row" spacing={1.5}>
                {footerData?.socialMedia?.map((socialMedia, ind) => (
                  <Link to={socialMedia.link} key={ind}>
                    <Box component="img" src={socialMedia.icon} height={36} />
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Stack spacing={2}>
              {footerData?.footer1?.map((ele, ind) => (
                <FooterLink key={ind} link={ele.link} label={ele.title} />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Stack spacing={2}>
              {footerData?.footer2?.map((ele, ind) => (
                <FooterLink key={ind} link={ele.link} label={ele.title} />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Stack spacing={2}>
              {footerData?.footer3?.map((ele, ind) => (
                <FooterLink key={ind} link={ele.link} label={ele.title} />
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          {footerData?.copyright}
        </Typography>
      </Container>
    </Box>
  );
}
