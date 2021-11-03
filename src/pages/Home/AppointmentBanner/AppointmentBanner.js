import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import doctor from "../../../images/doctor.png";
import appointmentBannerBg from "../../../images/appointment-bg.png";
import { Typography } from "@mui/material";
const appointmentBannerStyle = {
  background: `url(${appointmentBannerBg})`,
  backgroundColor: "rgba(20, 43, 82,0.8)",
  backgroundBlendMode: "darken",
};
const AppointmentBanner = () => {
  return (
    <Box sx={{ width: "100%", marginTop: 8 }} style={appointmentBannerStyle}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          <img
            src={doctor}
            alt="doctor"
            style={{ width: "450px", marginTop: "-110px" }}
          />
        </Grid>
        <Grid item xs={6} md={7} sx={{ textAlign: "left" }}>
          <Typography variant="h5" sx={{ color: "success.main" }}>
            Appointment
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "white", mt: 2, fontWeight: "bold" }}
          >
            Make An Appointment <br /> Today
          </Typography>
          <Typography variant="p" sx={{ color: "secondary", mt: 2 }}>
            Make An Appointment <br /> Today
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
