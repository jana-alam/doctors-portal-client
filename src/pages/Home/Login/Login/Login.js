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
import login from "../../../../images/login.png";
import useAuth from "../../../../hooks/useAuth";

const Login = () => {
  const { googleSignIn, loading } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(loginData.name);
    console.log(loginData);
  };

  const handleGoogle = () => {
    googleSignIn(location, history);
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
            Login
          </Typography>

          <form style={{ width: "60%" }} onSubmit={handleSubmit}>
            <TextField
              sx={{ my: 2 }}
              onChange={handleOnChange}
              id="standard-basic"
              label="Email"
              name="email"
              variant="standard"
              fullWidth
            />
            <TextField
              sx={{ my: 2 }}
              onChange={handleOnChange}
              type="password"
              id="standard-basic"
              label="Password"
              name="password"
              variant="standard"
              fullWidth
            />
            <Button type="submit" sx={{ width: 1, mt: 2 }} variant="contained">
              Submit
            </Button>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Button variant="text" sx={{ my: 3 }}>
                New user? Please Register
              </Button>
            </NavLink>
          </form>
          <p>----------------------------</p>
          {loading && <CircularProgress />}
          <Button
            onClick={handleGoogle}
            type="submit"
            sx={{ width: 1, mt: 2 }}
            variant="contained"
          >
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={5}>
          <img src={login} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
