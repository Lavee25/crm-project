import React from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper,Box } from '@mui/material';

const TaskDetails = ({ taskdata }) => {
  return (
    
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', 
          height: '100vh',     
        }}
        >
      


     <TableContainer component={Paper} sx={{ maxWidth: 1000, backgroundColor: 'white'}} >
      <Table aria-label="task-details">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4} fontwaigth="bold">
            Upcoming tasks
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Task</TableCell>
             <TableCell align="left">Due Date</TableCell>
            <TableCell align="left">Customer Email</TableCell>
            <TableCell align="left">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
        {taskdata.map((task) => (
      <TableRow key={task.id}>
      <TableCell align="left">{task.task_details}</TableCell>
      <TableCell align="left">{task.due_date}</TableCell>
      <TableCell align="left">{task.email?.email}</TableCell>
      <TableCell align="left">{task.created_at}</TableCell>
    </TableRow>
  ))}

          
        </TableBody>
      </Table>
    </TableContainer> 
    </Box>
  );
};

export default TaskDetails;