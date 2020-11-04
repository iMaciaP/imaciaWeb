// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(8, 0, 6),
    height: 500,
    // TMP
    backgroundColor: "cyan",
  },
}));

type Props = {};

const SimpleInfo = ({ ...props }: Props): React$Element<"div"> => {
  const classes = useStyles();

  return <div className={classes.root}>tmp placeholder</div>;
};

export default SimpleInfo;
