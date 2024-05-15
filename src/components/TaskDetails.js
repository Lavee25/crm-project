import React from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper,Box } from '@mui/material';

const TaskDetails = ({ taskdata,pageNumber,pageSize }) => {
  let startIndex=0;
if(pageNumber>1){
    startIndex=(pageNumber-1)*pageSize;
}
  return (
    
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          //alignItems: 'center', 
          backgroundColor: '#f7f7f7',
          marginTop:'10px',
          height: '100vh',     
        }}
        >
      <TableContainer component={Paper} sx={{ maxWidth: 1000}} >
      <Table aria-label="task-details">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={5} style={{ fontWeight: 'bold' }}>
            Upcoming Tasks.
            </TableCell>
          </TableRow>
          <TableRow >
          <TableCell align="left" style={{ fontWeight: 'bold' }}>Sr.No.</TableCell>
            <TableCell align="left"style={{ fontWeight: 'bold' }}>Task</TableCell>
             <TableCell align="left"style={{ fontWeight: 'bold' }}>Due Date</TableCell>
            <TableCell align="left"style={{ fontWeight: 'bold' }}>Customer Email</TableCell>
            <TableCell align="left"style={{ fontWeight: 'bold' }}>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
        {taskdata.map((task,index) => (
      <TableRow key={task.id}>
        <TableCell align="left">{startIndex+index+1}</TableCell>
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