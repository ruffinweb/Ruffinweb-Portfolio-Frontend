import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

function NavbarLinkSection({ href, onClick, text }) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

  const handleButtonClick = (e) => {
    // Execute the provided onClick function if available
    if (onClick) {
      onClick(e);
    }

    // Scroll to the section if a link is provided
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <Button
      component="div"
      onClick={handleButtonClick}
      sx={{
        display: "block",
        padding: "0",
        margin: "0",
      }}
    >
      <Typography
        sx={{
          textDecoration: "none",
          color: isSmallDevice ? "#000000" : undefined,
          padding: isSmallDevice ? "0" : "10px",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}

export default NavbarLinkSection;
