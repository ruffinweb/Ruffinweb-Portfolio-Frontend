import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

function NavbarLinkSocial({ href, onClick, text }) {
  const theme = useTheme();
  // MUI's useMediaQuery hook to determine if the device is small
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

  const CustomLink = React.forwardRef((props, ref) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
  ));

  return (
    <React.Fragment>
      {text.includes("GITHUB") || text.includes("LINKEDIN") ? (
        <Button
          component={CustomLink} // Use the custom anchor component
          onClick={onClick}
          sx={{ display: "block", padding: "10px" }}
        >
          <Typography sx={{ textDecoration: "none", fontWeight: "500" }}>
            {text}
          </Typography>
        </Button>
      ) : (
        <Link to={href} style={{ textDecoration: "none", padding: "10px" }}>
          <Typography sx={{ textDecoration: "none", fontWeight: "500" }}>
            {text}
          </Typography>
        </Link>
      )}
    </React.Fragment>
  );
}

export default NavbarLinkSocial;
