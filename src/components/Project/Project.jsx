import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";
import SkillsArray from "../../utils/SkillsArray.jsx";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const Project = ({ title, summary, previewUrl, className, skills }) => {
  const projectRef = useRef(null);
  const theme = useTheme();

  const singleProjectStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "stretch",
    margin: "0 auto",
    border: "2px solid grey",
    borderRadius: "10px",
    padding: "15px",
    height: "100%", // Ensure each project component occupies the same height
    backgroundColor: theme.palette.depth.main,
  };

  const projectTitleStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "fit-content", // Set height to fit the content
  };

  const projectTitleTextStyle = {
    flexGrow: 1, // Allow the title text to grow flexibly
    maxWidth: "80%", // Limit the width of the title text to prevent it from taking too much space
    overflow: "hidden", // Hide overflow to prevent it from affecting layout
    textOverflow: "ellipsis", // Add ellipsis for text overflow
  };

  const projectSummaryStyle = {
    alignSelf: "start",
    maxWidth: "600px", // max-width to limit the width of the summary text
    overflowWrap: "break-word",
    overflow: "hidden", // Hide overflow to prevent affecting the height of the project component
  };

  const projectSkillsStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: "10px",
  };

  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (projectRef.current) {
      gsap.fromTo(
        projectRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          delay: 0.3,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 90%", // Adjust as needed
            end: "bottom 20%", // Adjust as needed
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, [projectRef.current]);

  return (
    <Box
      sx={singleProjectStyle}
      className={`project ${className}`}
      ref={projectRef}
    >
      <Box sx={projectTitleStyle}>
        <Typography variant="h4" gutterBottom sx={projectTitleTextStyle}>
          {title}
        </Typography>

        <Link href={previewUrl} target="_blank">
          <IconButton
            size="small"
            aria-label="Go to project repository"
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <LaunchIcon />
          </IconButton>
        </Link>
      </Box>

      <Typography
        sx={projectSummaryStyle}
        variant="p"
        gutterBottom
        color="primary"
      >
        {summary}
      </Typography>

      <Box sx={projectSkillsStyle}>
        {skills.map((skillName, index) => {
          const skill = SkillsArray.find((skill) => skill.name === skillName);
          return skill ? (
            <img
              key={index}
              style={{ width: "30px", height: "30px" }}
              src={skill.icon}
              alt={skill.name}
            />
          ) : null;
        })}
      </Box>
    </Box>
  );
};

export default Project;
