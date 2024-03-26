import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GsapReveal from "./GsapReveal.jsx";
import { useTheme } from "@mui/material";

const ResumeCard = forwardRef((props, ref) => {
  const theme = useTheme();

  const resumeCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: `2px solid ${theme.palette.outline.main}`,
    backgroundColor: theme.palette.depth.main,
    borderRadius: "10px",
    margin: "100px 0",
    "@media (max-width: 1280px)": {
      margin: "80px 0",
    },
  };

  const downloadResumeStyle = {
    marginBottom: "16px",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: (theme) => theme.palette.primary.dark,
  };

  return (
    <GsapReveal ref={ref}>
      <Box sx={resumeCardStyle}>
        <Avatar sx={{ m: 1, bgcolor: "active.main" }}>
          <ContactPageIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Resume
        </Typography>

        <Typography variant="h6" sx={downloadResumeStyle}>
          Download My Resume
        </Typography>

        <Box>
          <Link
            target="_blank"
            href="/documents/Elijah Ruffin Resume Spring 2024.docx"
            rel="noreferrer"
          >
            <Button variant="outlined" size="large">
              DOCX
            </Button>
          </Link>
          <Link
            target="_blank"
            href="/documents/Elijah Ruffin Resume Spring 2024.pdf"
            rel="noreferrer"
          >
            <Button variant="outlined" size="large">
              PDF
            </Button>
          </Link>
        </Box>
      </Box>
    </GsapReveal>
  );
});

export default ResumeCard;
