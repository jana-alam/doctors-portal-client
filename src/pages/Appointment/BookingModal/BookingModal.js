import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({
  bookingOpen,
  handleBookingClose,
  name,
  time,
  date,
  setToastOpen,
}) => {
  const { user } = useAuth();
  const initialInfo = {
    name,
    time,
    patientName: user?.displayName,
    email: user?.email,
    phoneNumber: "",
    date: date.toLocaleDateString(),
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  const bookingSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setToastOpen(true);
          handleBookingClose();
        }
      });
  };

  return (
    <div>
      <Modal open={bookingOpen} onClose={handleBookingClose}>
        <Box sx={style}>
          <Typography
            sx={{ m: 1, textAlign: "center" }}
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color="info.main"
          >
            {name}
          </Typography>
          <form onSubmit={bookingSubmit}>
            <TextField
              onBlur={handleOnBlur}
              fullWidth
              label="Patient Name"
              id="outlined-size-small"
              defaultValue={user?.displayName}
              size="small"
              margin="normal"
              name="patientName"
            />
            <TextField
              onBlur={handleOnBlur}
              fullWidth
              type="number"
              label="Phone Number"
              id="outlined-size-small"
              size="small"
              margin="normal"
              name="phoneNumber"
            />
            <TextField
              onBlur={handleOnBlur}
              fullWidth
              type="email"
              label="Patient Email"
              id="outlined-size-small"
              defaultValue={user?.email}
              size="small"
              margin="normal"
              name="patientEmail"
            />
            <TextField
              disabled
              fullWidth
              label="Name"
              id="outlined-size-small"
              defaultValue={time}
              size="small"
              margin="normal"
            />
            <TextField
              disabled
              fullWidth
              label="Date"
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
              margin="normal"
            />
            <Button variant="contained" type="submit">
              Book Now
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
