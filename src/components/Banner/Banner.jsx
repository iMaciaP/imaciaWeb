// @flow
import * as React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import EarthRender from "../../statics/Earth_cyclesRender.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 6),
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  another: { flexDireciton: "column" },
  textContainer: {},
  buttonsContainer: {
    padding: theme.spacing(),
  },
  button: {
    margin: theme.spacing(),
  },
  title: {
    padding: theme.spacing(2),
  },
  image: {
    width: 450,
    height: 700,
    backgroundColor: "grey",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

type Props = {
  title?: string,
  subtitle?: string,
};

const Banner = ({ title, subtitle, ...props }: Props): React$Element<"div"> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        {/* TODO : check this out */}
        <div className={classes.another}>
          <div className={classes.textContainer}>
            <Typography variant="h3" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="subtitle1" className={classes.title}>
              {subtitle}
            </Typography>
          </div>
          <div className={classes.buttonsContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </NavLink>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <NavLink
                to="/contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                contact
              </NavLink>
            </Button>
          </div>
        </div>

        <div className={classes.image}>image placeholder</div>
      </Container>
    </div>
  );
};

Banner.defaultProps = {
  title: "Default title",
  subtitle: "Default example subtitle",
};

export default Banner;
