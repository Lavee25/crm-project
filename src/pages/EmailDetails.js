import React from 'react'
import {
       Typography,
       Card,
       CardContent,
       Grid,
       Box
} from '@mui/material';
const EmailDetails = ({email}) => {
  return (
    <div>

  <Box  sx={{display: 'flex',justifyContent: 'flex-end'}} > 
    <Card sx={{ width: 900 ,backgroundColor: 'white', border: '1px solid black',textAlign:"left"}}>
        <CardContent>
              {/* <Typography sx={{ fontWeight: 'bold' ,fontStyle:"italic",textAlign:"center"}}>Student Profile </Typography><br></br> */}
               <Grid container direction="column">
              <Grid item > <Typography > {email.customer.first_name} {email.customer.last_name} </Typography></Grid>
              {/* <Grid item > <Typography sx={{display: 'flex',justifyContent: 'flex-end'}}> {email.created_at}  </Typography></Grid> */}
              {/* <Grid item > <Typography> {email.email}      </Typography></Grid>  */}
              <Grid item > <Typography sx={{fontWeight:"bold"}}> {email.subject}  <Typography sx={{display: 'flex',justifyContent: 'flex-end'}}> {email.created_at}</Typography></Typography> 
             </Grid>
              <Grid item > <Typography>{email.body}   </Typography></Grid>
              </Grid>
               {/* <img src={student.profile?.image_url} alt="profile_pic" height={150} width={150}/>*/}
        </CardContent>
    </Card>
  </Box>  
   </div>
  )
}

export default EmailDetails;

