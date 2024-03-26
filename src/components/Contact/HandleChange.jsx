import React from "react";
import isValidEmail from "./IsValidEmail.jsx";

const HandleChange = ({ formData, setFormData, setErrors }) => {
  return (e, { type }) => {
    const { name, value } = e.target;

    let errorMessage = "";
    switch (name) {
      case "firstName":
        errorMessage = value.trim() === "" ? "First name is required" : "";
        break;
      case "lastName":
        errorMessage = value.trim() === "" ? "Last name is required" : "";
        break;
      case "email":
        errorMessage = !isValidEmail(value) ? "Invalid email address" : "";
        break;
      case "message":
        errorMessage = value.trim() === "" ? "Message is required" : "";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
};

export default HandleChange;
