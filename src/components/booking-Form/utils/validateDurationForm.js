export const validateDurationForm = (values) => {
  const errors = {};

  if (!values.duration) {
    errors.duration = "Required";
  }

  return errors;
};
