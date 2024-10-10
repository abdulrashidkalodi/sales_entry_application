// DetailsSection.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import { fetchDetails, deleteDetail } from "../../../redux/slices/detailsSlice";


const DetailsSection = ({ selectedVrNo, onSubtotalChange,vr_date, ac_name, ac_amt, status }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, deleteError } = useSelector(
    (state) => state.details
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    // Fetch details when the component mounts
    dispatch(fetchDetails());
  }, [dispatch]);
  // Filter the details based on the selected `vr_no`
  const filteredDetails = data.filter(
    (detail) => detail.vr_no === selectedVrNo
  );

  // Calculate the subtotal dynamically
  const subtotal = filteredDetails.reduce(
    (acc, detail) => acc + detail.qty * detail.rate,
    0
  );

  // Send the calculated subtotal to the parent component
  useEffect(() => {
    onSubtotalChange(subtotal); // Call the function to pass the subtotal up to the parent component
  }, [subtotal, onSubtotalChange]);

  // Handle delete
  const handleDelete = (sr_no) => {
    dispatch(deleteDetail(sr_no));
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginate filtered data
  const paginatedDetails = filteredDetails.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
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
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 10 }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Failed to load details.</div>
      ) : deleteError ? (
        <div>Failed to delete item: {deleteError}</div> // Display delete error if any
      ) : (
        <TableContainer sx={{ maxHeight: 440 }}>
          <div>
            {/* Open Form Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
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
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Vr.No</TableCell> */}
                <TableCell>Sr.No</TableCell>
                <TableCell>Item Code</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedDetails.map((detail) => (
                <TableRow key={`${detail.vr_no}-${detail.sr_no}`}>
                  {/* <TableCell>{detail.vr_no}</TableCell> */}
                  <TableCell>{detail.sr_no}</TableCell>
                  <TableCell>{detail.item_code}</TableCell>
                  <TableCell>{detail.item_name}</TableCell>
                  <TableCell>{detail.qty}</TableCell>
                  <TableCell>{detail.rate}</TableCell>
                  <TableCell>{(detail.qty * detail.rate).toFixed(2)}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(detail.sr_no)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>
                  <Typography
                    variant="h6"
                    sx={{
                      lineHeight: 1,
                      fontWeight: 600,
                      fontSize: "1.3rem !important",
                    }}
                  >
                    Sub Total:
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="h6"
                    sx={{
                      lineHeight: 1,
                      fontWeight: 600,
                      color: "success.main",
                      fontSize: "1.3rem !important",
                    }}
                  >
                    + $ {subtotal.toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredDetails.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DetailsSection;
