export const validateWhenForm = (values) => {
  const errors = {};

  if (!values.time) {
    errors.time = "Event time is required";
  }

  if (!values.date) {
    errors.date = "Event date is required";
  }

  return errors;
};
