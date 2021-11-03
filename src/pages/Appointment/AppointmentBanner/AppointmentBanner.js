import { Container, Grid } from "@mui/material";
import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "../../SharedComponents/Calendar/Calendar";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calendar date={date} setDate={setDate}></Calendar>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={chair} alt="chair" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentBanner;
