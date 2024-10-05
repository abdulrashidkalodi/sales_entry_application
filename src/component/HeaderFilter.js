import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function HeaderFilter({ companies = [], onCompanySelect }) {
  const handleSelectionChange = (event, value) => {
    if (value.length > 0) {
      onCompanySelect(value[0]); // Pass the first selected company to HeaderProfile
    } else {
      onCompanySelect(null); // If no selection, clear the selection
    }
  };

  return (
    <Stack spacing={3} sx={{ width: 450 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={companies}
        getOptionLabel={(option) => option.ac_name}
        onChange={handleSelectionChange} // Handle company selection
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              label={option.ac_name}
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
