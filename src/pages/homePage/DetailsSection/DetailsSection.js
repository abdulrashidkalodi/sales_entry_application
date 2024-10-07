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
import { fetchDetails } from "../../../redux/slices/detailsSlice";

const DetailsSection = ({ selectedVrNo }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.details);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchDetails());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load details.</div>;
  }

  // Filter the details based on the selected `vr_no`
  const filteredDetails = data.filter(
    (detail) => detail.vr_no === selectedVrNo
  );

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
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 10 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Vr.No</TableCell>
              <TableCell>Sr.No</TableCell>
              <TableCell>Item Code</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDetails &&
              filteredDetails.map((detail) => (
                <TableRow key={`${detail.vr_no}-${detail.sr_no}`}>
                  <TableCell>{detail.vr_no}</TableCell>
                  <TableCell>{detail.sr_no}</TableCell>
                  <TableCell>{detail.item_code}</TableCell>
                  <TableCell>{detail.item_name}</TableCell>
                  <TableCell>{detail.qty}</TableCell>
                  <TableCell>{detail.rate}</TableCell>
                  <TableCell>{detail.qty * detail.rate}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination (Optional, depending on how you want to handle large data sets) */}
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
