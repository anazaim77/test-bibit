import { Card } from "@material-ui/core";
import {
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import TextLabelValue from "../../atoms/TextLabelValue";

const DetailMovie = ({ data, loading }) => {
  // console.log(`data`, data);
  const dataDesc = useMemo(
    () => [
      {
        label: "Director",
        value: data.Director,
        mt: 5,
      },
      {
        label: "Writer",
        value: data.Writer,
      },
      {
        label: "Actors",
        value: data.Actors,
      },
    ],
    [data]
  );
  const dataDesc2 = useMemo(
    () => [
      {
        label: "Plot",
        value: data.Plot,
      },
      {
        label: "Awards",
        value: data.Awards,
      },
      {
        label: "Released",
        value: data.Released,
      },
      {
        label: "BoxOffice",
        value: data.BoxOffice,
      },
    ],
    [data]
  );
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: 34,
      }}
    >
      <Grid container>
        {loading ? (
          <Grid
            item
            md={12}
            alignItems="center"
            justifyContent="center"
            display="flex"
            mb={3}
          >
            <CircularProgress size={20} style={{ marginRight: 13 }} />
          </Grid>
        ) : (
          <React.Fragment>
            <Grid item md={5}>
              <Card
                style={{
                  width: 300,
                  borderWidth: 1,
                }}
              >
                <CardMedia component="img" image={data.Poster} alt="random" />
              </Card>
            </Grid>
            <Grid item md={7}>
              <Typography
                variant="h3"
                // noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {data.Title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {data.Production}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" mb={5}>
                {data.Genre} / {data.Year}
              </Typography>
              {dataDesc2.map(({ label, value }, id) => (
                <TextLabelValue key={id} label={label} value={value} />
              ))}
              {dataDesc.map(({ label, value, mt }, id) => (
                <TextLabelValue key={id} label={label} mt={mt} value={value} />
              ))}
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </Container>
  );
};

export default DetailMovie;
