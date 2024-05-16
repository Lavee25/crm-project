import React from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Box } from '@mui/material';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TaskDetails = ({ taskdata, pageNumber, pageSize }) => {


  //const [taskStatus, setTaskStatus] = React.useState(taskdata.status);
  
  const [tasks, setTasks] = React.useState(taskdata);

  const handleClick = async (taskId, currentStatus) => {
    try {
      const newStatus = !currentStatus;
      const response = await axios.patch(`http://localhost:8000/api/v1/task/changeTaskstatus/${taskId}`, { checked: newStatus });
      if (response.status === 200) {
        setTasks(prevTasks => 
          prevTasks.map(task => 
            task.id === taskId ? { ...task, checked: newStatus } : task
          )
        );
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };
  
  
   let startIndex = 0;
  if (pageNumber > 1) {
    startIndex = (pageNumber - 1) * pageSize;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
        marginTop: '10px',
        height: '100vh',
      }}
    >
      <TableContainer component={Paper} sx={{ maxWidth: 1000 }} >
        <Table aria-label="task-details">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={6} style={{ fontWeight: 'bold' }}>
                Upcoming Tasks.
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Sr.No.</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Task</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Due Date</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Customer Email</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>Created At</TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }} onClick={()=>handleClick()}>Checked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {taskdata.map((task, index) => (
              <TableRow key={task.id}>
                <TableCell align="left">{startIndex + index + 1}</TableCell>
                <TableCell align="left">{task.task_details}</TableCell>
                <TableCell align="left">{task.due_date}</TableCell>
                <TableCell align="left">{task.email?.email}</TableCell>
                <TableCell align="left">{task.created_at}</TableCell>
                <TableCell align="left"><Checkbox   {...label} 
                    checked={task.checked} 
                    onClick={() => handleClick(task.id, task.checked)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskDetails;