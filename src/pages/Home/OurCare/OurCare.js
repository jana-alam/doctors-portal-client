import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import treatment from "../../../images/treatment.png";
import { Button, Container, Typography } from "@mui/material";

const OurCare = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={5}>
            <img src={treatment} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" container="div" sx={{ textAlign: "left" }}>
              Exceptaional Dental <br /> Care, on your terms
            </Typography>
            <Typography variant="body2" textAlign="left" sx={{ my: 12 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati porro, ab hic ipsa laudantium sequi! Magni, ipsa eius
              aperiam alias ea, error explicabo animi eligendi suscipit
              perferendis odit amet corrupti id dolorum dignissimos, nam officia
              consequatur! Deserunt delectus vero distinctio!
            </Typography>
            <Button variant="contained">Learn Now</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurCare;
