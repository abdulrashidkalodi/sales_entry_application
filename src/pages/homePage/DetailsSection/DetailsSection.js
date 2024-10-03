import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Close } from "mdi-material-ui";

const DetailsSection = () => {
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
                <TableCell>Name</TableCell>
                <TableCell>WhatsApp Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Group</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Company</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Example Row Data */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>John Doe</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Group A</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Company XYZ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={5} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">111</TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">7%</TableCell>
                <TableCell align="right">9%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">123</TableCell>
              </TableRow> */}
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

export default DetailsSection;
