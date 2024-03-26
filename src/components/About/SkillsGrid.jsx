import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SkillsArray from "../../utils/SkillsArray";
import Link from "@mui/material/Link";
import { useMediaQuery } from "@mui/material";

const SkillsGrid = forwardRef((props, ref) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 960px)",
  );
  const getSkillIconStyle = () => {
    let width = 100; // Default width
    let height = 100; // Default height

    if (isSmallScreen) {
      width = 75; // For small screens
      height = 75; // For small screens
    } else if (isMediumScreen) {
      width = 75; // For medium screens
      height = 75;
    }

    return { width, height };
  };

  const skillItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    // alignItems: 'center'
    alignItems: { xs: "center", sm: "start" },
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {SkillsArray.map((skill, index) => (
        <Grid item xs={6} sm={4} md={4} key={index} sx={skillItemStyle}>
          <Link href={skill.tagLink} target="_blank">
            <img src={skill.icon} alt={skill.name} {...getSkillIconStyle()} />
            <Typography sx={{ alignSelf: "center" }}>{skill.name}</Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
});

export default SkillsGrid;
