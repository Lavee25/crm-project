// import React, { useState,useCallback,useEffect } from 'react';
// import { Card, CardContent, Typography, Box, Divider, Dialog, DialogContent } from '@mui/material';
// //import PropTypes from 'prop-types';
// import AddTask from './AddTask';
// import SearchAppBar from '../components/SideNavbar';
// //import axios from 'axios';
// import InboxService from '../services/InboxService';
// // Styled divider with a color and margin for better separation
// const CustomDivider = ({ ...props }) => (
//   <Divider sx={{ my: 2, bgcolor: 'primary.main' }} {...props} />
// );

// const CustomerEmail = ({emailId}) => {
//   // State to manage modal visibility
//   const [open, setOpen] = useState(false);
//   const[email,setEmail]=useState({});
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleSubmit =useCallback(async(emailId)=>{
//     try{
//     //const response=await axios.get(`http://localhost:8000/api/v1/inbox/getemailCustomerData/${emailId}`)
//     //console.log(response);
// //     if(Array.isArray(response.data.customerData)){
// //       setEmail(response.data.customerData)
// //     }
// //   else {
// //     console.error("Data is  not Array");
// //   }
// //console.log(response.data);
// //setEmail(response.data)
// await InboxService.getEmailById(emailId).then(response=>{
//    console.log(response);
//    setEmail(response.data)  
// }).catch((err)=>{
//     console.error("error:", err.message);
// })
//   }catch(error){
//       console.error("error:", error.message);
//     }
   
//   }),;
//    useEffect(() => {
//      handleSubmit(); 
//     }, [handleSubmit]);
 
  

//   return (
//     <>
//        <SearchAppBar/>
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <Card sx={{ width: 900, textAlign: 'left', margin: '15px', padding: '10px', backgroundColor: '#f7f7f7' }}>
//           <CardContent>
//             <Typography variant="subtitle1" color="text.secondary" onClick={handleClickOpen} sx={{color:'skyblue'}}>
//                {email.customer.first_name} {email.customer.last_name} ({email.email})
//               {/* {customer ? `${customer.first_name} ${customer.last_name}` : 'Customer Unknown'} ({email.email}) */}
//             </Typography>
//             <Typography variant="h6" gutterBottom>
//               {email.subject}
//             </Typography>
//             <Typography variant="subtitle2" color="text.secondary">
//               Date: {email.created_at}
//             </Typography>
//           <CustomDivider />
//           <Typography variant="body1">{email.body}</Typography>
//           </CardContent>
//         </Card>
//       </Box>

     
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
       
//         <DialogContent>
//         <AddTask emailId={email.id}/>
//         </DialogContent>
//       </Dialog> 
//     </>
//   );
// };

// // CustomerEmail.propTypes = {
// //   email: PropTypes.shape({
// //     subject: PropTypes.string.isRequired,
// //     email: PropTypes.string.isRequired,
// //     created_at: PropTypes.string.isRequired,
// //     body: PropTypes.string.isRequired,
// //     customer: PropTypes.shape({
// //       first_name: PropTypes.string.isRequired,
// //     }),
// //   }).isRequired,
// // };

// export default CustomerEmail;

