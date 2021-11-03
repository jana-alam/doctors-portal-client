import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Booking = ({ booking }) => {
  const { name, time, space } = booking;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ py: 3 }}>
        <Typography
          sx={{ color: "info.main", fontWeight: 600 }}
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography variant="h6" component="div">
          {time}
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary">
          Space Available: {space}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "info.main", mt: 1 }}
        >
          Book Appointment
        </Button>
      </Paper>
    </Grid>
  );
};

export default Booking;
