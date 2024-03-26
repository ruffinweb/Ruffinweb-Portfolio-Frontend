import React, { forwardRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GsapReveal from "./GsapReveal.jsx";
import { useTheme } from "@mui/material";

const TitleCard = forwardRef((props, ref) => {
  const theme = useTheme();

  const titleCardStyle = {
    margin: "50px 0",
    textAlign: "center",
    padding: "160px 0",
    borderRadius: "10px",
    border: `2px solid ${theme.palette.outline.main}`,

    "@media (max-width: 1280px)": {
      padding: "120px 0",
      margin: "30px 0",
    },
    "@media (max-width: 435px)": {
      padding: "120px 0",
      margin: "10px 0",
    },
  };

  return (
    <GsapReveal ref={ref}>
      <Box sx={titleCardStyle}>
        <Typography variant="h1" gutterBottom color="primary">
          Elijah Ruffin
        </Typography>
        <Typography variant="h3" component="div" color="primary">
          Full-Stack Developer
        </Typography>
        <Typography variant="h4" component="div" color="primary">
          Django
          <Box
            component="span"
            sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
          >
            •
          </Box>
          React
          <Box
            component="span"
            sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
          >
            •
          </Box>
          PostgreSQL
        </Typography>
      </Box>
    </GsapReveal>
  );
});

export default TitleCard;
