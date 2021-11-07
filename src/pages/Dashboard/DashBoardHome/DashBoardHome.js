import { Grid } from "@mui/material";
import React from "react";
import Calendar from "../../SharedComponents/Calendar/Calendar";

const DashBoardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2} sx={{ mt: 6 }}>
      <Grid item md={5}>
        <Calendar date={date} setDate={setDate} />
      </Grid>
      <Grid item md={7}>
        Date : {date.toDateString()}
      </Grid>
    </Grid>
  );
};

export default DashBoardHome;
