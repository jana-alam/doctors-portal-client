import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user?.displayName}
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user?.email}
            </Typography>
            <NavLink to="/appointment" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Appointment</Button>
            </NavLink>
            <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Dashboard</Button>
            </NavLink>
            {user?.email ? (
              <Button
                onClick={handleLogout}
                sx={{ color: "white", textUnderline: "none" }}
              >
                Logout
              </Button>
            ) : (
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white", textUnderline: "none" }}>
                  Login
                </Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
