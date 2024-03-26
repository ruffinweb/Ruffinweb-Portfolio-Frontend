import React, { forwardRef, useState } from "react";
import ContactForm from "../../components/Contact/ContactForm.jsx";
import HandleSubmit from "../../components/Contact/HandleSumbit.jsx";
import HandleChange from "../../components/Contact/HandleChange.jsx";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import GsapReveal from "./GsapReveal.jsx";

const ContactCard = forwardRef((props, ref) => {
  const theme = useTheme();
  const { gsapRef } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    HandleSubmit(event, {
      formData,
      setFormData,
      errors,
      setErrors,
      submitting,
      setSubmitting,
      openSnackbar,
      setOpenSnackbar,
    });
  };

  const contactFormStyle = {
    padding: "20px",
    backgroundColor: theme.palette.depth.main,
    borderRadius: "10px",
    border: `2px solid ${theme.palette.outline.main}`,
    margin: "100px 0",
    "@media (max-width: 1280px)": {
      margin: "80px 0",
    },
  };
  return (
    <GsapReveal ref={ref}>
      <Box sx={contactFormStyle}>
        <ContactForm
          formData={formData}
          handleChange={HandleChange({ formData, setFormData, setErrors })}
          handleSubmit={handleSubmit}
          errors={errors}
          submitting={submitting}
          openSnackbar={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
        />
      </Box>
    </GsapReveal>
  );
});

export default ContactCard;
