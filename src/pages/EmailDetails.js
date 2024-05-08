import React  from 'react';
import { Card, CardContent, Typography, Box, Divider, } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CustomDivider = ({ ...props }) => (
  <Divider sx={{ my: 2, bgcolor: 'primary.main' }} {...props} />
);
const EmailDetails = ({ email }) => {
  const navigate=useNavigate();
  

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Card sx={{ width: 900, textAlign: 'left', margin: '15px', padding: '10px', backgroundColor: '#f7f7f7' }}>
          <CardContent>
            <Typography variant="subtitle1" color="text.secondary" onClick={()=>navigate('/admin/inbox/customer-email')} sx={{color:'skyblue'}}>
              {email.customer.first_name} {email.customer.last_name} ({email.email})
            </Typography>
            <Typography variant="h6" gutterBottom>
              {email.subject}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Date: {email.created_at}
            </Typography>
          <CustomDivider />
          <Typography variant="body1">{email.body}</Typography>
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