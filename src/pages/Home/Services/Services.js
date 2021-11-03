import React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import SingleService from "../SingleService/SingleService";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: whitening,
  },
];

const Services = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography variant="h5" component="div" sx={{ m: 2 }}>
            Our Services
          </Typography>
          <Typography variant="h4" sx={{ mb: 4 }} component="div" gutterBottom>
            Services we provide
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 6, md: 12 }}
          >
            {services.map((service) => (
              <SingleService
                key={service.name}
                service={service}
              ></SingleService>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Services;
