import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CommonLinkCard({ icon, title, link }) {
  return (
    <Link
      to={link}
      style={{
        textDecoration: "none", // Removes underline
        color: "inherit", // Ensures text matches the theme
        margin: "3px",
      }}
    >
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: 2,
          border: "1px solid var(--color-secondary)", // Optional styling
          borderRadius: "8px", // Rounded corners
          backgroundColor: "var(--color-gray-100)", // Background color now in sx
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Add hover effect
            backgroundColor: "var(--color-gray-200)", // Optional hover background change
          },
          height: "135px",
        }}
      >
        <Box component="img" width={32} height={32} src={icon} alt={title} />
        <Typography variant="subtitle2">{title}</Typography>
      </Stack>
    </Link>
  );
}
