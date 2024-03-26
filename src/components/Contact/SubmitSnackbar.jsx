import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function SubmitSnackbar({ openSnackbar, setOpenSnackbar }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={handleClose}
      message="Message sent successfully!"
    />
  );
}
