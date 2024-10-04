import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import AddIcon from "@mui/icons-material/Add";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import { Filter } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: theme.spacing(4),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleMobileMenuOpen = (event) =>
    setMobileMoreAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <Filter />
          </Badge>
        </IconButton>
        <p>FILTER</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <AddIcon />
          </Badge>
        </IconButton>
        <p>Create New Company</p>
      </MenuItem>{" "}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <SaveIcon />
          </Badge>
        </IconButton>
        <p>Save Invoice</p>
      </MenuItem>{" "}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <PrintIcon />
          </Badge>
        </IconButton>
        <p>Print Invoice</p>
      </MenuItem>{" "}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <AccountCircle />
          </Badge>
        </IconButton>
        <p>Account</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ABC comp LTD
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <Filter />
              </Badge>
            </IconButton>{" "}
            <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <AddIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <SaveIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <PrintIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
