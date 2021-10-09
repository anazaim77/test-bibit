import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

const MovieCard = ({ item }) => {
  let history = useHistory();
  const _goToDetails = useCallback(() => {
    history.push(`/movies/${item.imdbID}`);
  }, [item, history]);
  const [open, setOpen] = React.useState(false);
  const _handleVisible = useCallback(() => {
    setOpen((e) => !e);
  }, [setOpen]);
  return (
    <React.Fragment>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardActionArea onClick={_handleVisible}>
          <CardMedia
            component="img"
            image={item.Poster}
            sx={{ height: 400 }}
            // image="https://source.unsplash.com/random"
            alt="random"
          />
        </CardActionArea>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.Title}
          </Typography>
          <Typography>{item.Year}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={_goToDetails}>
            Show Details
          </Button>
        </CardActions>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={_handleVisible}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 600,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CardMedia
              component="img"
              image={item.Poster}
              sx={{ height: "70vh" }}
              // image="https://source.unsplash.com/random"
              alt="random"
            />
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};

export default MovieCard;
