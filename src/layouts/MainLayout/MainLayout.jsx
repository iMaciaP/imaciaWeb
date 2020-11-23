// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
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
}));

export default function MainLayout(): React$Element<"div"> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderMenu />
      <Banner />
      <Fade delay={50}>
        <CardGrid />
      </Fade>
      <Fade delay={100}>
        <SimpleInfo {...simpleInfoProps} />
      </Fade>
    </div>
  );
}

// TODO: TEMPORARY PROPS, should get from firebase or graphql
const simpleInfoProps = {
  subtitle:
    "Man gone trees now trees dont see Man gone trees now trees dont seeMan gone trees now trees dont seeMan gone trees now trees dont seeMan gone trees now trees dont see",
  title: "Welcome to the site",
};
