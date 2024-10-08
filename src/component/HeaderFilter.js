import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function HeaderFilter({ ac_name, onSelectionChange }) {
  const [selectedCompanies, setSelectedCompanies] = useState([]); // Initialize as an empty array

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
        value={selectedCompanies} // Set the value to selected companies
        getOptionLabel={(option) => option.ac_name} // Show the ac_name in options
        onChange={handleSelectionChange} // Handle selection
        renderTags={() => null} // Remove chips, no labels will show
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Filter Company"
            placeholder={
              selectedCompanies.length > 0
              ? selectedCompanies.map((company) => company.ac_name).join(", ") // Display selected companies in the placeholder
              : "Search Company" // Default placeholder
            }
          />
        )}
      />
    </Stack>
  );
}
