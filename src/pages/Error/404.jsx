import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotFoundError = () => {
  const errorPageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: "50px",
    maxWidth: "1600px",
    minHeight: "100vh",
    padding: "15px",
    "@media (max-width: 1000px)": {
      gap: "50px",
    },
  };

  return (
    <Box sx={errorPageStyle}>
      <Typography variant="h3" gutterBottom>
        404 Error Code. Page Not Found.
      </Typography>
    </Box>
  );
};

export default NotFoundError;
