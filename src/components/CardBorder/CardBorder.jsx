import * as React from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

const CardBorder = ({ marginBottom }) => {
  const theme = useTheme();

  const cardBorderStyle = {
    paddingBottom: "20px",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    marginBottom: marginBottom || "0px", // Set a default marginBottom value
  };

  return <Box sx={cardBorderStyle}></Box>;
};

export default CardBorder;
