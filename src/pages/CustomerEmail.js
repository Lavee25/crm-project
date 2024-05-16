import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box, Divider, Dialog, DialogContent } from '@mui/material';
import AddTask from '../components/AddTask';
import SearchAppBar from '../components/SideNavbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CustomDivider = ({ ...props }) => (
  <Divider sx={{ my: 2, bgcolor: 'primary.main' }} {...props} />
);

const CustomerEmail = () => {

  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState({
    customer: { first_name: '', last_name: '' },
    subject: '',
    body: '',
    created_at: '',
    email: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleSubmit = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/inbox/getemailCustomerData/${id}`)
      setEmail(response.data.data)


    } catch (error) {
      console.error("error:", error.message);
    }

  }, [id]);
  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);



  return (
    <>
      <SearchAppBar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{
          width: 500, height: 450, textAlign: 'left', margin: '15px', padding: '10px', backgroundColor: '#f7f7f7'
        }}>
          <CardContent>
            <div>
              <Typography variant="subtitle1" color="text.secondary" >
                {email.customer.first_name} {email.customer.last_name}
              </Typography>

              <Typography variant="subtitle1" color="text.secondary" onClick={() => navigate(`/admin/inbox/email/${id}/customer`)} sx={{ color: 'skyblue', cursor: 'pointer' }}>
                from:{email.email}
              </Typography>

              <Typography variant="h6">{email.subject}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Date: {email.created_at}
              </Typography>
              <CustomDivider />
              <Typography variant="body1">{email.body}</Typography>
            </div>
            <Box sx={{
              alignSelf: 'flex-end',
              textAlign: 'right',
              display: 'flex',
              justifyContent: 'flex-end', // Aligns the content to the right
              alignItems: 'flex-end', // Aligns the content to the bottom

            }}>
              <Button onClick={handleClickOpen} sx={{ color: 'skyblue', cursor: 'pointer' }}>New Task</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>


      <Dialog open={open} onClose={handleClose} >
        <DialogContent>
          <AddTask Id={email.id} email={email.email}/>
        </DialogContent>
      </Dialog>
    </>
  );
};



export default CustomerEmail;

