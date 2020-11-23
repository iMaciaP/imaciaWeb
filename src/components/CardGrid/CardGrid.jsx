// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { map } from "lodash";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import imageTexture from "../../statics/texture.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: theme.palette.background.main,
  },
  container: {},
  grid: {},
  media: {
    height: 140,
  },
  cardroot: {},
}));

type Props = {};

const SimpleInfo = ({ ...props }: Props): React$Element<"div"> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container className={classes.grid} spacing={3}>
          {map(cardArr, ({ title, description }, index) => {
            return (
              <Grid key={index} item xs={12} lg={6}>
                <Card className={classes.cardroot}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={imageTexture}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      More...
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default SimpleInfo;

// TODO: temporary props
const cardArr = [
  {
    title: "Web",
    description: " Check out my coding examples",
  },
  {
    title: "Game",
    description: " Take a look at my art portfolio",
  },
];
