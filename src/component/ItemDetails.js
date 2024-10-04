import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

const ItemDetails = () => {
  return (
    <div>
      {/* Paper Component for the Table */}
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 10 }}>
        {/* Example Table without any dynamic data */}
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {/* Example Column Headers */}
                <TableCell>Sr.No</TableCell>
                <TableCell>Item Code</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Dlt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Example Row Data */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>1</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>100</TableCell>
                <TableCell>1</TableCell>
                <TableCell>100</TableCell>
                <TableCell>dlt</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={5} align="right" />
                <TableCell colSpan={2} align="right">
                  Subtotal
                </TableCell>
                <TableCell align="right">100</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination (Static Example) */}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={100} // Example total row count
          rowsPerPage={10}
          page={0}
        />
      </Paper>
    </div>
  );
};

export default ItemDetails;
