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
import { addItem } from "../redux/slices/detailsSlice";

const AddNewItem = () => {
  const dispatch = useDispatch();
  const { isSuccess,isError } = useSelector((state) => state.data || {});
  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState({
    sr_no: "",
    item_code: "",
    item_name: "",
    description: "",
    qty: "",
    rate: "",
  });
  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  // Open form dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close form dialog
  const handleClose = () => {
    setOpen(false);
    setInputValue({
      sr_no: "",
      item_code: "",
      item_name: "",
      description: "",
      qty: "",
      rate: "",
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(addItem(inputValue));

    if (addItem.fulfilled.match(result)) {
      setOpen(false); // Close dialog on success
    }
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
          {isSuccess && <p>{isSuccess.success}</p>}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
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
              value={inputValue.sr_no}
              onChange={handleInput}
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
              value={inputValue.item_code}
              onChange={handleInput}
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
              value={inputValue.item_name}
              onChange={handleInput}
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
              value={inputValue.description}
              onChange={handleInput}
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
              value={inputValue.qty}
              onChange={handleInput}
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
              value={inputValue.rate}
              onChange={handleInput}
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
