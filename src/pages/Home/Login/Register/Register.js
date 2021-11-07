import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import login from "../../../../images/login.png";

const Register = () => {
  const { registerUser, loading } = useAuth();
  const [registerData, setRegisterData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...registerData };
    newData[field] = value;
    setRegisterData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("didnot match");
      return;
    } else {
      registerUser(
        registerData.email,
        registerData.password,
        registerData.name,
        location,
        history
      );
      alert("successful");
    }
  };
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={7} sx={{ mt: 4 }}>
          <Typography
            color="info.main"
            variant="h5"
            textAlign="left"
            gutterBottom
          >
            Register
          </Typography>

          {!loading && (
            <form style={{ width: "60%" }} onSubmit={handleSubmit}>
              <TextField
                sx={{ my: 1 }}
                onChange={handleOnChange}
                id="standard-basic"
                label="Name"
                name="name"
                variant="standard"
                fullWidth
              />
              <TextField
                sx={{ my: 1 }}
                onChange={handleOnChange}
                id="standard-basic"
                label="Email"
                name="email"
                variant="standard"
                fullWidth
              />
              <TextField
                sx={{ my: 1 }}
                onChange={handleOnChange}
                type="password"
                id="standard-basic"
                label="Password"
                name="password"
                variant="standard"
                fullWidth
              />
              <TextField
                sx={{ my: 1 }}
                onChange={handleOnChange}
                type="password"
                id="standard-basic"
                label="Confirm Password"
                name="confirmPassword"
                variant="standard"
                fullWidth
              />
              <Button
                type="submit"
                sx={{ width: 1, mt: 2 }}
                variant="contained"
              >
                Submit
              </Button>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text" sx={{ my: 3 }}>
                  Already Registered? Please Login
                </Button>
              </NavLink>
            </form>
          )}
          {loading && <CircularProgress />}
        </Grid>
        <Grid item xs={5}>
          <img src={login} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
