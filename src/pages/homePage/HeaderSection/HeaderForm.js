// ** React Imports
import React from 'react';

// ** MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

// Styled components
const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}));

const HeaderForm = () => {
  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          {/* Input Fields */}
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Enter WhatsApp Number' placeholder='Enter WhatsApp Number' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Please Enter Name' placeholder='Please Enter Name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='email' label='Enter Your E-mail' placeholder='Enter Your E-mail' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Group</InputLabel>
              <Select label='Group' defaultValue='defaultValue'>
                <MenuItem value='defaultValue'>Select the group</MenuItem>
                <MenuItem value='group2'>Group 2</MenuItem>
                <MenuItem value='group3'>Group 3</MenuItem>
                <MenuItem value='group4'>Group 4</MenuItem>
                <MenuItem value='group5'>Group 5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label='Status' defaultValue='SelectLabel'>
                <MenuItem value='SelectLabel'>Select Label</MenuItem>
                <MenuItem value='newCustomer'>New Customer</MenuItem>
                <MenuItem value='pendingPayment'>Pending Payment</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='paid'>Paid</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Company' placeholder='ABC Pvt. Ltd.' defaultValue='ABC Pvt. Ltd.' />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Close
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default HeaderForm;
