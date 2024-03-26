import * as React from "react";
import { useRef } from "react";
import Box from "@mui/material/Box";
import TitleCard from "./TitleCard.jsx";
import AboutCard from "./AboutCard.jsx";
import ResumeCard from "./ResumeCard.jsx";
import ProjectsCard from "./ProjectsCard.jsx";
import ContactCard from "./ContactCard.jsx";
import CardBorder from "../../components/CardBorder/CardBorder.jsx";
import LinksAppBar from "../../components/LinksAppBar/LinksAppBar.jsx";
import ImageBackground from "../../components/Background/ImageBackground.jsx";
import Copyright from "../../components/Copyright/Copyright.jsx";

const Home = () => {
  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const homePageStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: "1600px",
    minHeight: "100vh",
    padding: "15px",
    gap: "100px",
    "@media (max-width: 1000px)": {
      gap: "50px",
    },
  };

  return (
    <Box>
      <ImageBackground />
      <LinksAppBar
        titleRef={titleRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />
      <Box sx={homePageStyle}>
        <TitleCard ref={titleRef} />
        <CardBorder />
        <AboutCard ref={aboutRef} />
        <CardBorder />
        <ProjectsCard ref={projectsRef} />
        <CardBorder />
        <ResumeCard ref={resumeRef} />
        <CardBorder />
        <ContactCard ref={contactRef} />
        <Copyright />
      </Box>
    </Box>
  );
};

export default Home;
