import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import BottomTitleCard from "../../pages/Home/BottomTitleCard.jsx";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

function Copyright(props) {
  const theme = useTheme();

  const copyrightPageStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "20px",
    padding: "15px",
    borderTop: `1px solid ${theme.palette.primary.main}`,
  };
  return (
    <Box sx={copyrightPageStyle}>
      <BottomTitleCard />
      <Typography variant="body2" align="center" {...props}>
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default Copyright;
