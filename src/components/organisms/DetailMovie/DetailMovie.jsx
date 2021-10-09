import { Card } from "@material-ui/core";
import { CardMedia, Container } from "@mui/material";
import React from "react";

const DetailMovie = ({ data }) => {
  return (
    <Container maxWidth="md">
      <Card
        style={{
          width: 200,
          marginTop: 34,
          borderWidth: 1,
        }}
      >
        <CardMedia
          component="img"
          image={data.Poster}
          // image="https://source.unsplash.com/random"
          alt="random"
        />
      </Card>
    </Container>
  );
};

export default DetailMovie;
