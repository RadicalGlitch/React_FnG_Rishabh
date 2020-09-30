import React from "react";
import { Grid } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Flag } from "semantic-ui-react";

import Controls from "./controls/Controls";
import { useForm, Form } from "./useForm";
import * as feedbackService from "../services/feedbackService";

const ratings = ["Excellent", "Good", "Fair", "Bad"];

const initialValues = {
  id: 0,
  feedback: "",
  phone: "",
  fullName: "",
  email: "",
  service_rating: "Excellent",
  beverage_rating: "Excellent",
  cleanliness_rating: "Excellent",
  overall_rating: "Excellent",
};

function FeedbackForm() {
  const validate = (fieldValues = values) => {
    const reg = /.+@.+..+/;
    let temp = { ...errors };
    if ("feedback" in fieldValues)
      temp.feedback =
        fieldValues.feedback.length > 3 ? "" : "Please enter a valid Feedback";
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("phone" in fieldValues)
      temp.phone =
        fieldValues.phone.length > 9 ? "" : "Please enter a valid Phone Number";
    if ("email" in fieldValues)
      temp.email = reg.test(fieldValues.email)
        ? ""
        : "Please enter a valid E-mail";
    setErrors({ ...temp });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    initialValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      feedbackService.insertFeedback(values);
      setValues(initialValues);
      setErrors({});
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center">
        <Grid item xs={6}>
          <Controls.InputField
            name="feedback"
            label="Feedback"
            value={values.feedback}
            onChange={handleInputChange}
            multiline
            error={errors.feedback}
          />
          <Controls.InputField
            name="phone"
            label="Phone"
            value={values.phone}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Flag name="in" />
                </InputAdornment>
              ),
            }}
            error={errors.phone}
          />
          <Controls.InputField
            name="fullName"
            label="Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.InputField
            name="email"
            label="E-mail"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.RadioGroup
            name="service_rating"
            label="Quality of the service you received from your host."
            value={values.service_rating}
            onChange={handleInputChange}
            options={ratings}
          />
          <Controls.RadioGroup
            name="beverage_rating"
            label="Quality of your beverage."
            value={values.beverage_rating}
            onChange={handleInputChange}
            options={ratings}
          />
          <Controls.RadioGroup
            name="cleanliness_rating"
            label="Was our restaurant clean?"
            value={values.cleanliness_rating}
            onChange={handleInputChange}
            options={ratings}
          />
          <Controls.RadioGroup
            name="overall_rating"
            label="Overall dining experience."
            value={values.overall_rating}
            onChange={handleInputChange}
            options={ratings}
          />
        </Grid>
        <Controls.Button text="Submit" type="submit" />
      </Grid>
    </Form>
  );
}

export default FeedbackForm;
