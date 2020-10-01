import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import FeedbackTable from "../components/FeedbackTable";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      padding: theme.spacing(2),
      height: "100%",
    },
  },
}));

function Table() {
  const classes = useStyles();

  return (
    <div>
      <h1>All Feedback</h1>
      <Paper className={classes.root}>
        <FeedbackTable />
      </Paper>
    </div>
  );
}

export default Table;
