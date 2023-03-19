export const validateWhereForm = (values) => {
  const errors = {};

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.city) {
    errors.city = "Gotta know the city";
  }

  return errors;
};
