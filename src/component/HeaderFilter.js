import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";


export default function HeaderFilter({ ac_name,onSelectionChange }) {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // Handle the selection of companies
  const handleSelectionChange = (event, newValue) => {
    setSelectedCompanies(newValue);
    onSelectionChange(newValue); // Notify the parent component
  };

  return (
    <Stack spacing={3} sx={{ width: 450 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={ac_name} // Options to show in dropdown
        getOptionLabel={(option) => option.ac_name} // Show the ac_name in options
        onChange={handleSelectionChange} // Handle selection
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              label={option.ac_name} // Show ac_name on selected chips
              {...getTagProps({ index })}
              key={option.ac_name}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Filter Company"
            placeholder="Search Company"
          />
        )}
      />
    </Stack>
  );
}
