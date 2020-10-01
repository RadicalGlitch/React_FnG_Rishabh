import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import FeedbackForm from "../components/FeedbackForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      width: "100vw",
      height: "100%",
    },
  },
  h2: {
    color: "#0064B1",
    margin: "0",
  },
  p: {
    fontSize: "1.1rem",
    margin: "0",
  },
}));

function Form() {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.h2}>Aromatic Bar</h2>
      <p className={classes.p}>
        We are commited to providing you with the best dining experience
        possible, so we welcome you comments. Please fill out this
        questionnaire. Thank You
      </p>
      <Paper className={classes.paper}>
        <FeedbackForm />
      </Paper>
    </div>
  );
}

export default Form;
