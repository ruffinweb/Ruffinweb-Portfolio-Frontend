import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: "50px",
    minHeight: "100vh",
    padding: "15px",
    "@media (max-width: 1000px)": {
      gap: "50px",
    },
  };

  return (
    <Box sx={blogStyle}>
      <Typography variant="h3" gutterBottom>
        Blog coming soon
      </Typography>

      <Link to="/" style={{ textDecoration: "underline", padding: "10px" }}>
        <Typography sx={{ textDecoration: "underline", fontWeight: "500" }}>
          Back to Home
        </Typography>
      </Link>
    </Box>
  );
};

export default Blog;
