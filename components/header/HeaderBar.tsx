import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Link from "next/link";
import IconNav from "@/assets/icons/home/menu.svg";
import IconNavClose from "@/assets/icons/home/menu-close.svg";
import { IconButton, MenuItem, MenuList, useTheme } from "@mui/material";
import HeaderMenuRight from "./HeaderMenuRight";

const pages = ["title 1", "title 2", "title 3", "title 4"];
function HeaderBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "rgba(86, 44, 44, 0.70)", backdropFilter: "blur(7.5px)", boxShadow: "none", borderBottom: "1px solid rgba(238, 238, 238, 0.20)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: { xs: "48px", lg: "72px" }, minHeight: "auto" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", lg: "flex" },
              fontSize: "15px",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO SAMPLE
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
              flexGrow: 1,
              fontSize: "13px",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton sx={{ p: 0 }} aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              {Boolean(anchorElNav) ? <IconNavClose /> : <IconNav />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              classes={{ paper: "menu-appbar-popper" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant="LargeTitle4" sx={{ textAlign: "center" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Link href={`/${page}`} key={page} passHref style={{ color: "white", display: "block", textTransform: "capitalize", textDecoration: "none", margin: "0 45px", transition: "all 0.3s ease-in-out" }}>
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", lg: "flex" }, gap: "20px" }}>
            <HeaderMenuRight />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderBar;
