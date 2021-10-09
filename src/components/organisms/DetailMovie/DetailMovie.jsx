import { Card } from "@material-ui/core";
import { CardMedia, Container } from "@mui/material";
import React from "react";

const DetailMovie = () => {
  return (
    <Container maxWidht="md">
      <Card
        style={{
          width: 200,
          marginTop: 34,
          borderWidth: 1,
        }}
      >
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          alt="random"
        />
      </Card>
    </Container>
  );
};

export default DetailMovie;
