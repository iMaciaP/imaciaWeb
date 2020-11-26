// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ContactInfo from "../../components/ContactInfo/ContactInfo";

const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    maxWidth: "50%",
  },
  fieldContainer: {
    display: "flex",
    padding: theme.spacing(3),
    flexDirection: "column",
  },
  textField: {},
  actionArea: {
    display: "flex",
    maxWidth: "60%",
    padding: theme.spacing(3),
  },
  contactInfo: {},
}));

const ContactPage = (): React$Element<"div"> => {
  const classes = useStyles();

  const handleSubmit = ({ name, message }) =>
    alert(`name: ${name} + mess: ${message}`); //TODO: handle submti

  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={classes.fieldContainer}>
          <Typography variant="h6"> Name: </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            label="Name"
            name="name"
            // value={name}
            autoFocus
            // error={errorForm}
            // onChange={(e) => this.value: e.target.value}
            className={classes.textField}
          />
          <Typography variant="h6"> Message: </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            label="Your message here..."
            name="message"
            multiline
            rows={4}
            // value={name}
            autoFocus
            // error={errorForm}
            // onChange={(e) => this.value: e.target.value}
            className={classes.textField}
          />
        </div>
        <div className={classes.actionArea}>
          <Button
            type="submit"
            size="small"
            color="primary"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </form>
      <div className={classes.contactInfo}>
        <ContactInfo vertical />
      </div>
    </div>
  );
};

export default ContactPage;
