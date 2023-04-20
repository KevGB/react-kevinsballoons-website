export const validateForm = (values) => {
  const errors = {};

  const validName = /^[a-z- ]+$/i;
  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (!validName.test(values.firstName)) {
    errors.firstName = "Hold up... is that really your name?";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (!validName.test(values.lastName)) {
    errors.lastName = "Hold up... is that your name, fr fr?";
  }

  const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z.]+$/i;
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validEmail.test(values.email)) {
    errors.email = "Double check that this is a valid email address";
  }


  if (!values.phone && !values.instagram) {
    errors.phone = "Please include either your phone number";
    errors.instagram = "or your Instagram handle"
  } 

  // if (!values.tandc) {
  //   errors.tandc = "Required";
  // }

  // if (!values.duration) {
  //   errors.duration = "Required";
  // } 

  // if (!values.time) {
  //   errors.time = "Event time is required"
  // }

  // if (!values.date) {
  //   errors.date = "Event date is required"
  // }

  // if (!values.address) {
  //   errors.address = "Address is required"
  // }
  
  // if(!values.city) {
  //   errors.city = "Gotta know the city"
  // }

  

  return errors;
};
