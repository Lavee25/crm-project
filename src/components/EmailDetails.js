import React, { useState }  from 'react';
import { Card, CardContent, Typography, Box, Divider, } from '@mui/material';
//import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ArchiveIcon from '@mui/icons-material/Archive';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';
//npm install @mui/material @mui/icons-material

const CustomDivider = ({ ...props }) => (
  <Divider sx={{ my: 2, bgcolor: 'primary.main' }} {...props} />
);

const EmailDetails = ({ email,onRemove }) => {
const[emailStatus,setEmailStatus]=useState(email.status);


  const handleClick = async () => {
    try {
      const newStatus=!emailStatus;
      const response = await axios.patch(`http://localhost:8000/api/v1/inbox/ChangeStatus/${email.id}`, { status: newStatus });
    if (response.status === 200) {
        setEmailStatus(newStatus);
        onRemove(email.id)  
       
      }
    } catch (error) {
      console.error('Error updating email status:', error);
    }
  };

  const navigate=useNavigate();
  
  const bodyPreview =
    email.body.length > 100
      ? `${email.body.substring(0, 100)}...`
      : email.body;

  return (
    <>
   
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Card sx={{ width: 900,height:200, textAlign: 'left', margin: '15px', padding: '10px', backgroundColor: '#f7f7f7' }}>
         
          <Box
          sx={{
            position: 'absolute', 
           right:10, 
          }}
          >
          <Tooltip title="Archive" placement="right">
          <ArchiveIcon
            onClick={() => handleClick()}
            sx={{ cursor: 'pointer' }}
            />
            </Tooltip>
        </Box>
            <CardContent>
           <Typography variant="subtitle1" color="text.secondary" onClick={()=>navigate(`/admin/inbox/email/${email.id}`)} sx={{color:'skyblue',cursor:'pointer'}}>
              {email.customer.first_name} {email.customer.last_name}({email.email})               
            </Typography>
            <Typography variant="h6" gutterBottom>
              {email.subject}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Date: {email.created_at}
            </Typography>
           <CustomDivider />
          <Typography variant="body1">{bodyPreview}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

EmailDetails.propTypes = {
  email: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EmailDetails;