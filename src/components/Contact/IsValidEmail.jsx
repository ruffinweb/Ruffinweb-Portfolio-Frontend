import React from "react";

const IsValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email); // Returns a boolean
};

export default IsValidEmail;
