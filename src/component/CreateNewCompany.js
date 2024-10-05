// ui 
import React, { useState, forwardRef } from "react";
// ** MUI Imports
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputAdornment from "@mui/material/InputAdornment";

// CustomInput component for the DatePicker
const CustomInput = forwardRef((props, ref) => {
  return (
    <TextField
      fullWidth
      {...props}
      inputRef={ref}
      label="Vr Date"
      autoComplete="off"
    />
  );
});
const CreateNewCompany = () => {
  const [date, setDate] = useState(null);
  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          {/* Input Fields */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Vr No."
              placeholder="123.."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <Phone /> */}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>{" "}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText="MM-DD-YYYY"
                customInput={<CustomInput />}
                id="form-layouts-separator-date"
                onChange={(date) => setDate(date)} // Corrected date handling
              />
            </FormControl>
          </Grid>{" "}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="SelectLabel">
                <MenuItem value="Active">A</MenuItem>
                <MenuItem value="InActive">I</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Please Enter Company name"
              placeholder="ABC Pvt. Ltd."
            />
          </Grid>
          <Grid item xs={12} align="right">
            <Button variant="contained" sx={{ marginRight: 3.5 }}>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default CreateNewCompany;