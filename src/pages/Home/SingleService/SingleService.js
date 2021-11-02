import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SingleService = ({ service }) => {
  return (
    <Grid item xs={4} sm={3} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {service.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleService;
