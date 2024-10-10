import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addItem } from "../redux/slices/addDetailSlice";

const CreateNewCompany = () => {
  const [open, setOpen] = useState(false);

  // Open form dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close form dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Open Form Button */}
      <Button
        variant="contained"
        sx={{ m: 1, backgroundColor: `success.main` }}
        onClick={handleClickOpen}
      >
        Create New Company +
      </Button>

      {/* Popup Form using Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Create New Company +
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form >
          <DialogContent dividers>
            <Typography variant="body1" gutterBottom>
              Please complete this form for add new item.
            </Typography>

            {/* sr_no - Primary Key */}
            <TextField
              name="vr_no"
              margin="dense"
              label="company Number (vr_no)"
              type="number"
              fullWidth
              variant="outlined"
              required
            />

            {/* item_code - From item_master table */}
            <TextField
              name="vr_date"
              margin="dense"
              label="date of creating (vr_date)"
              type="text"
              fullWidth
              variant="outlined"
              required
            />

            {/* item_name - From item_master table */}
            <TextField
              name="ac_name"
              margin="dense"
              label="account Name (ac_name)"
              type="text"
              fullWidth
              variant="outlined"
              required
            />

            {/* description - User Entry */}
            <TextField
              name="ac_amt"
              margin="dense"
              label="amount"
              type="number"
              fullWidth
              variant="outlined"
              required
            />

            {/* qty - User Entry */}
            <TextField
              name="status"
              margin="dense"
              label="status (A or I )"
              type="number"
              fullWidth
              variant="outlined"
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateNewCompany;
