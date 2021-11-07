import React, { useState } from "react";
import Navigation from "../../SharedComponents/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Navigation></Navigation>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments date={date}></AvailableAppointments>
    </>
  );
};

export default Appointment;
