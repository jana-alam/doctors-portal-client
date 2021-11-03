import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";
import { Container, Typography } from "@mui/material";

const bgStyle = {
  background: `url(${bg})`,
  backgroundPosition: "left",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "500px",
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: 1,
      }}
      style={bgStyle}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h4">
                Your New Smile <br /> Start Here
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} sx={{ textAlign: "left" }}>
            <img src={chair} style={{ width: "300px" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
