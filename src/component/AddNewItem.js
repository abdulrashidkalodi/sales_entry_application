import React, { useEffect, useState } from "react";
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

const AddNewItem = () => {
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
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add New Item
      </Button>

      {/* Popup Form using Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Add New Item, for ABC.com.ltd , vr_no:2,
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form>
          <DialogContent dividers>
            <Typography variant="body1" gutterBottom>
              Please complete this form for add new item.
            </Typography>

            {/* sr_no - Primary Key */}
            <TextField
              name="sr_no"
              margin="dense"
              label="Serial Number (sr_no)"
              type="number"
              fullWidth
              variant="outlined"
              required
            />

            {/* item_code - From item_master table */}
            <TextField
              name="item_code"
              margin="dense"
              label="Item Code (item_code)"
              type="text"
              fullWidth
              variant="outlined"
              required
            />

            {/* item_name - From item_master table */}
            <TextField
              name="item_name"
              margin="dense"
              label="Item Name (item_name)"
              type="text"
              fullWidth
              variant="outlined"
              required
            />

            {/* description - User Entry */}
            <TextField
              name="description"
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              required
            />

            {/* qty - User Entry */}
            <TextField
              name="qty"
              margin="dense"
              label="Quantity (qty)"
              type="number"
              fullWidth
              variant="outlined"
              required
            />

            {/* rate - User Entry */}
            <TextField
              name="rate"
              margin="dense"
              label="Rate (rate)"
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

export default AddNewItem;
