import React from "react";
import {
  makeStyles,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    margintop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
}));

export default function useTable(records, headCells, filterFn) {
  const classes = useStyles();

  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const recordsAfterFiltering = () => {
    return filterFn.fn(records);
  };

  return {
    TblHead,
    TblContainer,
    recordsAfterFiltering,
  };
}
