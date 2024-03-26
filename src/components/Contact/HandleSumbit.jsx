import IsValidEmail from "./IsValidEmail.jsx";
import sendData from "./SendData";

const HandleSubmit = async (
  event,
  {
    formData, // Would types would be helpful here so that I can see the shape of this object?
    setFormData,
    errors,
    setErrors,
    submitting,
    setSubmitting,
    openSnackbar,
    setOpenSnackbar,
  },
) => {
  // Validations for each form field

  if (formData.firstName.trim() === "") {
    setErrors((prevErrors) => ({ ...prevErrors, firstName: true }));
    return;
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, firstName: false }));
  }

  if (formData.lastName.trim() === "") {
    setErrors((prevErrors) => ({ ...prevErrors, lastName: true }));
    return;
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, lastName: false }));
  }

  if (formData.message.trim() === "") {
    setErrors((prevErrors) => ({ ...prevErrors, message: true }));
    return;
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, message: false }));
  }

  // Email validation
  if (!IsValidEmail(formData.email)) {
    setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    return;
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, email: false }));
  }

  // Error checks before submission
  if (
    !errors.firstName &&
    !errors.lastName &&
    !errors.message &&
    !errors.email
  ) {
    try {
      // Save sender details using the fetch request component
      // console.log('Running sendData fetch requests.')
      await sendData(formData);

      // Clear form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      // Enable submit button
      setSubmitting(false);
      setOpenSnackbar(true);
    } catch (error) {
      // Handle error
      console.error("Error handling form submission:", error.message);
      // Set submitting to false to allow user to retry
      setSubmitting(false);
      // Optionally display an error message to the user
    }
  } else {
    // Handle form validation errors
    // Optionally display validation error messages to the user
  }
};
export default HandleSubmit;
