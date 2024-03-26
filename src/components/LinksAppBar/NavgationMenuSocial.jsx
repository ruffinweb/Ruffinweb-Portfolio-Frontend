import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

function NavigationMenuSocial({ items, anchorEl, onClose }) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
      sx={{ mt: "20px" }}
    >
      {items.map((item, index) => (
        <MenuItem key={index}>
          {/* Conditionally render button or Link based on URL */}
          {item.link.includes("github.com") ||
          item.link.includes("linkedin.com") ? (
            <Button
              href={item.link}
              target="_blank" // Open in new tab for certain links
              sx={{ width: "100%", padding: "0" }}
            >
              <Typography sx={{ color: "#000000", width: "100%" }}>
                {item.title}
              </Typography>
            </Button>
          ) : (
            <Link
              to={item.link}
              style={{ textDecoration: "none", width: "100%" }}
              onClick={onClose} // Close menu for other links
            >
              <Typography
                sx={{ color: "#000000", width: "100%", textDecoration: "none" }}
              >
                {item.title}
              </Typography>
            </Link>
          )}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default NavigationMenuSocial;
