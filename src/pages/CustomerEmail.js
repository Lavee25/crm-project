import React, { useState,useCallback,useEffect } from 'react';
import { Card, CardContent, Typography, Box, Divider, Dialog, DialogContent} from '@mui/material';
//import PropTypes from 'prop-types';
import AddTask from './AddTask';
import SearchAppBar from '../components/SideNavbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import InboxService from '../services/InboxService';
// Styled divider with a color and margin for better separation

const CustomDivider = ({ ...props }) => (
  <Divider sx={{ my: 2, bgcolor: 'primary.main' }} {...props} />
);

 const CustomerEmail = () => {
//   // State to manage modal visibility
   const{id}=useParams();
  const [open, setOpen] = useState(false);
//   const[email,setEmail]=useState({});
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
  const navigate=useNavigate();
  const handleSubmit =useCallback(async()=>{
    try{
        //console.log(emailId);
    const response=await axios.get(`http://localhost:8000/api/v1/inbox/getemailCustomerData/${id}`)
    console.log(response);
   setEmail(response.data.data)
   //console.log(email)

  }catch(error){
      console.error("error:", error.message);
    }
   
  },[id]);
   useEffect(() => {
     handleSubmit(); 
    }, [handleSubmit]);
 
  

  return (
    <>
       <SearchAppBar/>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: 500,height:450, textAlign: 'left', margin: '15px', padding: '10px', backgroundColor: '#f7f7f7'
    }}>
          <CardContent>
            <div>
             <Typography variant="subtitle1" color="text.secondary" >
                {email.customer.first_name} {email.customer.last_name} 
             </Typography>
             {/* <Route path="/adminLogin/inbox" element={<Inbox/>}/>  */}
             {/* <Route path="/adminLogin/inbox" element={<Inbox/>}/>  */}
             <Typography variant="subtitle1" color="text.secondary" onClick={()=>navigate(`/admin/inbox/email/${id}/customer`)} sx={{color:'skyblue',cursor:'pointer'}}>
                from:{email.email} 
             </Typography>
            
          <Typography variant="h6">{email.subject}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
              Date: {email.created_at}
            </Typography>
          <CustomDivider />
          <Typography variant="body1">{email.body}</Typography>
          </div>
          <Box  sx={{
        alignSelf: 'flex-end', // Aligns to the end within the flex column
        textAlign: 'right',
        display: 'flex',
        justifyContent: 'flex-end', // Aligns the content to the right
        alignItems: 'flex-end', // Aligns the content to the bottom
         // Ensures text is aligned to the right
        }}>
          <Typography variant="h6"  onClick={handleClickOpen} sx={{ color: 'skyblue',cursor:'pointer' }}>Add Task</Typography>
          </Box>
           </CardContent>
        </Card>
      </Box>

     
      <Dialog open={open} onClose={handleClose} >
       <DialogContent>
        <AddTask Id={email.id}/>
        </DialogContent>
      </Dialog> 
    </>
  );
};

// CustomerEmail.propTypes = {
//   email: PropTypes.shape({
//     subject: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     created_at: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     customer: PropTypes.shape({
//       first_name: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };

export default CustomerEmail;

