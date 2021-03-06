import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  const [toastOpen, setToastOpen] = useState();

  const handleClose = (event, reason) => {
    setToastOpen(false);
  };
  return (
    <Container>
      <h2>Available appointment {date.toDateString()}</h2>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setToastOpen={setToastOpen}
          ></Booking>
        ))}
      </Grid>

      <Snackbar open={toastOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your appointment booked successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AvailableAppointments;
