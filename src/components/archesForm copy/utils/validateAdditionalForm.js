export const validateAdditionalForm = (values) => {
  const errors = {};

  if (!values.tandc) {
    errors.tandc = "Required";
  }

  return errors;
};
