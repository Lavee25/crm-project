import React from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Box } from '@mui/material';

const CustomerDetails = ({ customerdata, pageNumber, pageSize }) => {
  let startIndex = 0;

  // Calculate startIndex only if pageNumber is greater than 1
  if (pageNumber > 1) {
    startIndex = (pageNumber - 1) * pageSize;
  }

   //(Incase of first page)
  // startIndex=(1-1)*10  
  // startIndex =0
  // firstIndex={startIndex + index+1}
  // firstIndex={0+0+1}=1

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
        height: '100vh',
      }}
    >
      <TableContainer component={Paper} sx={{ maxWidth: 1000, backgroundColor: 'white' }}>
        <Table aria-label="customer-details">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={5} style={{ fontWeight: 'bold' }}>
                Customer Details.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Sr.No</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>First Name</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Last Name</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Customer Email</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(customerdata) && customerdata.map((customer, index) => (
              <TableRow key={customer.id}>
                <TableCell align="left"> {startIndex + index + 1}</TableCell>
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