import React, { useState } from "react";
import {
  InputAdornment,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";

import Controls from "./controls/Controls";
import useTable from "./useTable";
import * as feedbackService from "../services/feedbackService";
import { Icon } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "30vw",
  },
  searchToolbar: {
    margin: "0 auto",
  },
}));

const headCells = [
  { id: "fullName", label: "Name" },
  { id: "email", label: "E-mail" },
  { id: "phone", label: "Phone" },
  { id: "feedback", label: "Feedback" },
  { id: "service_rating", label: "Service" },
  { id: "beverage_rating", label: "Beverage" },
  { id: "cleanliness_rating", label: "Cleanliness" },
  { id: "overall_rating", label: "Overall" },
];

export default function FeedbackTable() {
  const classes = useStyles();

  const [records] = useState(feedbackService.getAllFeedbacks());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const { TblHead, TblContainer, recordsAfterFiltering } = useTable(
    records,
    headCells,
    filterFn
  );

  return (
    <>
      <Toolbar className={classes.searchToolbar}>
        <Controls.InputField
          className={classes.searchInput}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon name="search" />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </Toolbar>
      <TblContainer className={classes.pageContent}>
        <TblHead />
        <TableBody>
          {recordsAfterFiltering().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.feedback}</TableCell>
              <TableCell>{item.service_rating}</TableCell>
              <TableCell>{item.beverage_rating}</TableCell>
              <TableCell>{item.cleanliness_rating}</TableCell>
              <TableCell>{item.overall_rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    </>
  );
}
