import { Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

export default function FooterLink({ label, link }) {
  return (
    <Typography
      component={Link}
      to={link}
      sx={{
        textDecoration: "none",
        color: "#fff",
        fontWeight: 300,
        fontSize: 14,
        display: "flex",
        alignItems: "center", // For vertical alignment
      }}
    >
      <Stack direction="row" gap={0.5} alignItems="center">
        <KeyboardArrowRightIcon />
        {label}
      </Stack>
    </Typography>
  );
}
