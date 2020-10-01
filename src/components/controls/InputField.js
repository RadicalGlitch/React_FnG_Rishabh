import React from "react";
import { FormControl, FormLabel, TextField } from "@material-ui/core";

export default function InputField(props) {
  const {
    name,
    label,
    value,
    onChange,
    InputProps,
    error = null,
    ...other
  } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <TextField
        name={name}
        variant="outlined"
        size="small"
        value={value}
        onChange={onChange}
        InputProps={InputProps}
        {...(error && { error: true, helperText: error })}
        {...other}
      />
    </FormControl>
  );
}
