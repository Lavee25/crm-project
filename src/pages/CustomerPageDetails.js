import React from 'react'
//import  SearchAppBar from '../components/SideNavbar';
import { Card, CardContent, Typography, Box} from '@mui/material';

// const CustomDivider = ({ ...props }) => (
//     <Divider sx={{ my: 2, bgcolor: 'primary.main' }} {...props} />
//   );
const CustomerPageDetails = ({customer}) => {
  return (
    <div>
  
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: 500,height:450, textAlign: 'left', margin: '15px', padding: '10px', backgroundColor: '#f7f7f7'
         }}>
          <CardContent>
           <Typography variant="subtitle1" color="text.secondary" >
               Customer Name- {customer.first_name} {customer.last_name} 
            </Typography>
            
          
           </CardContent>
        </Card>
      </Box>
       
    </div>
  )
}

export default CustomerPageDetails;
