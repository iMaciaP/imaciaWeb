// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

type Props = {
  vertical?: boolean,
};

const ContactInfo = ({ vertical, ...props }: Props): React$Element<"div"> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5">
        Contact info
      </Typography>
    </div>
  );
};

ContactInfo.defaultProps = {
  vertical: false,
};

export default ContactInfo;
