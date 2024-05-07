import React from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper,Box } from '@mui/material';

const CustomerDetails = ({ customerdata }) => {
  return (
    <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customer-details">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4} fontwaigth="bold">
              Customer Details
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(customerdata) && customerdata.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell align="left">{customer.first_name}</TableCell>
              <TableCell align="left">{customer.last_name}</TableCell>
              <TableCell align="left">{customer.email}</TableCell>
              <TableCell align="left">{customer.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default CustomerDetails;