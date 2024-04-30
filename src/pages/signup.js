import React from 'react';
import{
    Button,
    TextField,
    Typography,
    Grid,
    Card,
    CardContent,
  Box} from '@mui/material';
    //import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import {useFormik}  from 'formik';
    import * as yup from 'yup';
    import signupImage from '../images/signupImage';



     const initialState={
         first_name:"",
         last_name: "",
         email: "",
         password: ""
      }
      
      
      const validationSchema=yup.object({
        first_name:yup.string().min(5).required(),
        last_name: yup.string().min(5).max(30).required(),
        email: yup.string().min(1).required(),
        password: yup.string().required()
        
      }) 




const Signup = () => {

    const formik = useFormik({
        initialValues:initialState,
        validationSchema,
      })
    
  return (
    <div style={{textAlign:"center"}}>
     <Card sx={{width:750}}>
       <CardContent>
        <Typography sx={{fontWeight:"bold"}}>Signup</Typography><br></br>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Grid container direction="column" spacing={2}>

            <Grid item sx={{width:"150"}}>
                  <TextField
                   sx={{ width: "100%" }}
                   name="first_name"
                   label='First Name'
                   variant='outlined'
                   value={formik.values.first_name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                    placeholder=" add first name here" required
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name }/>
                </Grid>
                <br></br>
                <Grid item>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Last Name"
                    name="last_name"
                    variant='outlined'
                    value={formik.values.last_name} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Add last name here" required
                    error={formik.touched.rollnumber && Boolean(formik.errors.rollnumber)}
                    helperText={formik.touched.rollnumber && formik.errors.rollnumber }/> 
                </Grid>
                <br></br>
                <Grid item>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Email"
                    name="email"
                    variant='outlined'
                    value={formik.values.email} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Add last name here" required
                    error={formik.touched.rollnumber && Boolean(formik.errors.rollnumber)}
                    helperText={formik.touched.rollnumber && formik.errors.rollnumber }/> 
                </Grid>
                <br></br>
                <Grid item>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Password"
                    name="password"
                    variant='outlined'
                    value={formik.values.last_name} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Add last name here" required
                    error={formik.touched.rollnumber && Boolean(formik.errors.rollnumber)}
                    helperText={formik.touched.rollnumber && formik.errors.rollnumber }/> 
                </Grid>
                <br></br>
                <Grid item>
                    <Button
                      sx={{ width: "100%" }}
                      variant='contained'
                      position='absolute'
                     
                      //</Grid>disabled={(formik.errors.name||formik.errors.rollnumber||formik.errors.date||formik.errors.image_url)||
                     // (!formik.values.name ||!formik.values.rollnumber||!formik.values.date||!formik.values.image_url  )}
                      > Signup
                    </Button>
                    <Typography>if u have an account Register Now</Typography>
                    </Grid>
                   </Grid>
                   <img src={signupImage()} height={400} width={400} alt='not fount'></img>

                   </Box>

    </CardContent>
   </Card>





    </div>
    )
}

export default Signup;
