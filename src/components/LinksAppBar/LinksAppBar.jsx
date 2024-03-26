import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import NavigationMenuSocial from "./NavgationMenuSocial.jsx";
import NavbarLinkSection from "./NavbarLinkSection.jsx";
import NavbarLinkSocial from "./NavbarLinkSocial.jsx";
import { useTheme } from "@mui/material";
import Theme from "../../Theme.jsx";

// LinksAppbar Component.
function LinksAppbar({
  titleRef,
  aboutRef,
  projectsRef,
  resumeRef,
  contactRef,
}) {
  const theme = useTheme();

  const socialPages = [
    { title: "GITHUB", link: "https://github.com/ruffinweb" },
    { title: "LINKEDIN", link: "https://linkedin.com/in/elijah-ruffin" },
    { title: "BLOG", link: "blog" },
    { title: "SERVICES", link: "services" },
  ];

  const sections = [
    { title: "About", link: aboutRef },
    { title: "Projects", link: projectsRef },
    { title: "Resume", link: resumeRef },
    { title: "Contact", link: contactRef },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleRuffinWebClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: theme.palette.background.default,
        boxShadow: "none",
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        borderRight: `1px solid ${theme.palette.primary.main}`,
        borderLeft: `1px solid ${theme.palette.primary.main}`,
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo and Brand */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleRuffinWebClick}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            RUFFINWEB
          </Typography>

          {/* Mobile Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open link to">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ p: 0 }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <NavigationMenuSocial
              items={socialPages}
              anchorEl={anchorElNav}
              onClose={handleCloseNavMenu}
            />
          </Box>

          {/* Responsive Navigation */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => {
              handleCloseNavMenu();
              handleRuffinWebClick();
            }}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            RUFFINWEB
          </Typography>

          {/* Social Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {socialPages.map((page, index) => (
              <NavbarLinkSocial
                key={index}
                text={page.title}
                href={page.link}
                onClick={handleCloseNavMenu}
              />
            ))}
          </Box>

          {/* Page Section Menu for Mobile */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Navigate to">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>

            {/*I don't create a component like NavigationMenuSocial for the page sections array yet.
            It makes sense to keep the elements that have scroll behavior in the same component.
            While it may shorten this component it may add unneeded complexity.
            */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {sections.map((section, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseUserMenu}
                  sx={{ justifyContent: "flex-start" }}
                >
                  <NavbarLinkSection
                    text={section.title}
                    onClick={() => {
                      handleCloseNavMenu();
                      if (section.link) {
                        section.link.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Section Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {sections.map((section, index) => (
              <NavbarLinkSection
                key={index}
                text={section.title}
                onClick={() => {
                  handleCloseNavMenu();
                  if (section.link) {
                    section.link.current.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LinksAppbar;
