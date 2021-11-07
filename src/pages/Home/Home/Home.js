import React from "react";
import Navigation from "../../SharedComponents/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import OurCare from "../OurCare/OurCare";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <OurCare></OurCare>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;
