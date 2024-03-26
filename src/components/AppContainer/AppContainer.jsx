import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

const AppContainer = () => {
  const appContainerStyle = {
    padding: "0 0 10px",
  };

  return (
    <Container maxWidth="xl" sx={appContainerStyle}>
      <Outlet />
    </Container>
  );
};

export default AppContainer;
