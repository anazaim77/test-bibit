import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React from "react";
import MovieCard from "../../molecules/cards/MovieCard/MovieCard";
import { CircularProgress } from "@mui/material";
import CenterBox from "../../atoms/CenterBox";

const ListMovies = ({ data }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CenterBox style={{ marginBottom: 34 }}>
        {true && <CircularProgress size={20} style={{ marginRight: 13 }} />}
      </CenterBox>
      <Grid container spacing={4}>
        {data?.map((card, id) => {
          console.log("card", card);
          return (
            <Grid key={id} item xs={12} sm={6} md={4}>
              <MovieCard item={card} />
            </Grid>
          );
        })}
      </Grid>
      <CenterBox>
        <Button variant="outlined">
          {true && <CircularProgress size={15} style={{ marginRight: 13 }} />}
          Load more data
        </Button>
      </CenterBox>
    </Container>
  );
};

export default ListMovies;
