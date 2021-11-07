import React from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";
import useAuth from "../../../hooks/useAuth";

const Booking = ({ booking, date, setToastOpen }) => {
  const { user } = useAuth();
  const { name, time, space } = booking;

  const [bookingOpen, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  if (!user?.email) {
    return <CircularProgress />;
  }
  return (
    <>
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
            onClick={handleBookingOpen}
            variant="contained"
            sx={{ backgroundColor: "info.main", mt: 1 }}
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        bookingOpen={bookingOpen}
        handleBookingClose={handleBookingClose}
        name={name}
        time={time}
        date={date}
        setToastOpen={setToastOpen}
      ></BookingModal>
    </>
  );
};

export default Booking;
