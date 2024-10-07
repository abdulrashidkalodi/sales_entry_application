// ** React Imports
import React, { useEffect, useState } from "react";
// ** Redux Imports
import { useSelector, useDispatch } from "react-redux";
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
// Custom Component
import HeaderFilter from "../../../component/HeaderFilter";
import { fetchHeader } from "../../../redux/slices/headerSlice";

const HeaderSection = ({ setSelectedVrNo }) => {
  const dispatch = useDispatch();
  // State to hold the selected company
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Fetch header data from Redux store
  const { data, isLoading, isError } = useSelector((state) => state.header);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  // Map the data to companies array
  const companies = data
    ? data.map((item) => ({
        ac_name: item.ac_name,
        vr_no: item.vr_no,
        vr_date: item.vr_date,
        ac_amt: item.ac_amt,
        status: item.status,
      }))
    : [];

  // Set the first entry as the default if nothing is selected
  useEffect(() => {
    if (companies.length > 0 && !selectedCompany) {
      setSelectedCompany(companies[0]); // Set the first company as default
      setSelectedVrNo(companies[0].vr_no); // Set the vr_no in the parent
    }
  }, [companies, selectedCompany, setSelectedVrNo]);

  // Handle the selection from HeaderFilter
  const handleFilterSelection = (selected) => {
    if (selected.length > 0) {
      setSelectedCompany(selected[0]);
      setSelectedVrNo(selected[0].vr_no); // Update the vr_no when a new company is selected
    }
  };

  // Handle loading and error states
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error loading data.</Typography>;
  }

  // If there's no data yet, return null or a default message
  if (!data || data.length === 0) {
    return <Typography>No data available.</Typography>;
  }

  // // Display the first entry from the data
  // const firstEntry = data[0];

  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center", // Align vertically in the center
              }}
            >
              <Typography variant="h3" sx={{ marginRight: 2 }}>
                {selectedCompany?.ac_name || "ABC COM LTD"}
              </Typography>
              <Avatar
                sx={{
                  m: 1,
                  width: 38,
                  height: 38,
                  marginRight: 3,
                  fontSize: "1rem",
                  color: "common.white",
                  backgroundColor: `success.main`,
                }}
              >
                {selectedCompany?.status?.[0]?.toUpperCase() || "A"}
              </Avatar>
              <Avatar
                sx={{
                  m: 1,
                  width: 38,
                  height: 38,
                  marginRight: 3,
                  fontSize: "1rem",
                  color: "common.white",
                  backgroundColor: `error.main`,
                }}
              >
                {selectedCompany?.status?.[0]?.toUpperCase() || "I"}
              </Avatar>
            </Box>
            <Typography variant="h4">
              vr.No: {selectedCompany?.vr_no}
            </Typography>
            <Typography variant="h5">
              Date: {new Date(selectedCompany?.vr_date).toLocaleDateString()}{" "}
            </Typography>
            <br />
            <Typography
              variant="h6"
              sx={{
                lineHeight: 1,
                fontWeight: 600,
                color: "success.main",
                fontSize: "2.75rem !important",
              }}
            >
              + $ {selectedCompany?.ac_amt}
            </Typography>
          </Box>
          <Box sx={{ mr: 2, mb: 1, display: "flex", flexDirection: "column" }}>
            <HeaderFilter ac_name={companies} onSelectionChange={handleFilterSelection} />
            <Button sx={{ m: 1 }} variant="contained">
              Update
            </Button>
            <Button
              sx={{ m: 1, backgroundColor: `error.main` }}
              variant="contained"
            >
              Delete
            </Button>
            <Button
              sx={{ m: 1, backgroundColor: `success.main` }}
              variant="contained"
            >
              Create New +
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeaderSection;