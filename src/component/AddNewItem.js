import React, { useState } from "react";
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

const AddNewItem = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Open Form Button */}
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add New Item
      </Button>

      {/* Popup Form using Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Add New Item, for  ABC.com.ltd , vr_no:2,
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" gutterBottom>
            Please complete this form for add new item.
          </Typography>

          {/* sr_no - Primary Key */}
          <TextField
            margin="dense"
            label="Serial Number (sr_no)"
            type="number"
            fullWidth
            variant="outlined"
            required
          />

          {/* item_code - From item_master table */}
          <TextField
            margin="dense"
            label="Item Code (item_code)"
            type="text"
            fullWidth
            variant="outlined"
            required
          />

          {/* item_name - From item_master table */}
          <TextField
            margin="dense"
            label="Item Name (item_name)"
            type="text"
            fullWidth
            variant="outlined"
            required
          />

          {/* description - User Entry */}
          <TextField
            margin="dense"
            label="Description (description)"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            required
          />

          {/* qty - User Entry */}
          <TextField
            margin="dense"
            label="Quantity (qty)"
            type="number"
            fullWidth
            variant="outlined"
            required
            inputProps={{ step: "1" }}  // Allows 3 decimal precision
          />

          {/* rate - User Entry */}
          <TextField
            margin="dense"
            label="Rate (rate)"
            type="number"
            fullWidth
            variant="outlined"
            required
            inputProps={{ step: "1" }}  // Allows 2 decimal precision
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNewItem;
