// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import PaperInfo from "../../components/PaperInfo/PaperInfo";
import CardGrid from "../../components/CardGrid/CardGrid";

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

// TEMPORARY PROPS, should get from firebase or graphql
const paperInfoProps = {
  subtitle:
    "Man gone trees now trees dont see Man gone trees now trees dont seeMan gone trees now trees dont seeMan gone trees now trees dont seeMan gone trees now trees dont see",
  title: "Welcome to the site",
};

export default function MainLayout(): React$Element<"div"> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderMenu />
      <Fade>
        <PaperInfo {...paperInfoProps} />
        <CardGrid />
      </Fade>
    </div>
  );
}
