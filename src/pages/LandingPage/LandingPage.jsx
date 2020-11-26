// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import GrainIcon from "@material-ui/icons/Grain";
import map from "lodash/map";

import Fade from "react-reveal/Fade";

import SimpleInfo from "../../components/SimpleInfo/SimpleInfo";
import CardGrid from "../../components/CardGrid/CardGrid";
import Banner from "../../components/Banner/Banner";

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    maxWidth: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -99,
  },
  progressBar: {
    padding: theme.spacing(),
    margin: theme.spacing(3),
    borderRadius: 8,
  },
}));

const LandingPage = (): React$Element<"div"> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Banner />
      <Fade delay={50}>
        <CardGrid />
      </Fade>
      <Fade delay={100}>
        <SimpleInfo {...simpleInfoProps} />
      </Fade>
      {/* TODO turn this into component  */}
      {map(progressBarsProps, ({ title, value }, index) => (
        <div key={index}>
          <Typography gutterBottom variant="h5" component="h2">
            <GrainIcon fontSize="small" />
            {title}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            color="secondary"
            className={classes.progressBar}
          />
        </div>
      ))}
      {/* -------------------------  */}
    </div>
  );
};

export default LandingPage;

// TODO: TEMPORARY PROPS, should get from firebase or graphql
const simpleInfoProps = {
  subtitle:
    "Man gone trees now trees dont see Man gone trees now trees dont seeMan gone trees now trees dont seeMan gone trees now trees dont seeMan gone trees now trees dont see",
  title: "Welcome to the site",
};

const progressBarsProps = [
  {
    title: "title1",
    value: 50,
  },
  {
    title: "title1",
    value: 50,
  },
  {
    title: "title1",
    value: 50,
  },
];
