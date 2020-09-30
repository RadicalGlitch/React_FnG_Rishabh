import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import FeedbackForm from "../components/FeedbackForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      width: "100vw",
      height: "100%",
    },
  },
}));

function Form() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <FeedbackForm />
      </Paper>
    </div>
  );
}

export default Form;
