import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppContainer from "./components/AppContainer/AppContainer";
import Home from "./pages/Home/Home";
import RuffinWebTheme from "./Theme";
import Blog from "./pages/Blog/Blog.jsx";
import Services from "./pages/Services/Services.jsx";

// To be replaced by the endpoint of the API deployed through the CloudFormation Template.
// I wont be using this API endpoint for this app. HTTP requests will be done with fetch in the SendData component. They are sent to a seperate Django rest API on an EC2 instance.
// const APIEndPoint = 'https://8bq477ail8.execute-api.us-east-1.amazonaws.com/v1/hello'

const App = () => {
  return (
    <ThemeProvider theme={RuffinWebTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AppContainer />}>
            <Route path="" element={<Home />} />
          </Route>

          <Route path="/blog" element={<Blog />} />

          <Route path="/services" element={<Services />} />

          <Route path="/error" element={<AppContainer />}>
            <Route path="" element={<Services />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
