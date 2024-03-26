import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkillsGrid from "../../components/About/SkillsGrid.jsx";
import AboutArray from "../../utils/AboutArray.jsx";
import GsapReveal from "./GsapReveal.jsx";
import { useTheme } from "@mui/material";

const AboutCard = React.forwardRef((props, ref) => {
  const theme = useTheme();

  const aboutCardStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: "250px",
    alignItems: "start",
    paddingTop: "100px",
    paddingBottom: "40px",
    margin: "0 auto",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
      gap: "80px",
    },
  };

  const textSectionStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    flex: 1,
    gap: "40px",
    textAlign: "start",
    padding: "20px",
    backgroundColor: theme.palette.depth.main,
    borderRadius: "10px",
    border: `2px solid ${theme.palette.outline.main}`,
  };

  const skillsSectionStyle = {
    ...textSectionStyle,
    gap: "50px",
  };

  return (
    <GsapReveal ref={ref}>
      <Box sx={aboutCardStyle} id="aboutCard" ref={ref}>
        <Box sx={textSectionStyle}>
          <Typography variant="h4" gutterBottom color="primary">
            About Me
          </Typography>
          {/* Map through AboutArray and render each text */}
          {AboutArray.map((text, index) => (
            <Typography key={index} variant="h5" gutterBottom color="primary">
              {text}
            </Typography>
          ))}
        </Box>
        <Box sx={skillsSectionStyle}>
          <Typography variant="h4" gutterBottom color="primary">
            Tools and Technology
          </Typography>
          <SkillsGrid />
        </Box>
      </Box>
    </GsapReveal>
  );
});

export default AboutCard;
