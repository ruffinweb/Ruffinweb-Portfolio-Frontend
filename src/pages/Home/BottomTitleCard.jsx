import React, { forwardRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const BottomTitleCard = (props) => {
  const theme = useTheme();

  const bottomTitleCardStyle = {
    textAlign: "start",
    // padding: "160px 0",
    "@media (max-width: 435px)": {
      padding: "20px 0",
    },
  };

  return (
    <Box sx={bottomTitleCardStyle}>
      <Typography variant="h2" gutterBottom color="primary">
        Ruffinweb
      </Typography>
    </Box>
  );
};

export default BottomTitleCard;
