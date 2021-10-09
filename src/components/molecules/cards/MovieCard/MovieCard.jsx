import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

const MovieCard = ({ item }) => {
  let history = useHistory();
  const _goToDetails = useCallback(() => {
    history.push(`/movies/${item.imdbID}`);
  }, [item, history]);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea onClick={_goToDetails}>
        <CardMedia
          component="img"
          image={item.Poster}
          sx={{ height: 400 }}
          // image="https://source.unsplash.com/random"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.Title}
          </Typography>
          <Typography>{item.Year}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
