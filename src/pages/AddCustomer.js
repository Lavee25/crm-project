import React from 'react';

import{
    Button,
    TextField,
    Typography,
    Grid,
    Card,
    CardContent,
    Box} from '@mui/material';
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import  {useFormik}  from 'formik';
    import * as yup from 'yup';
    import CustomerService from '../services/CustomerService';
  




  const validationSchema=yup.object({
        first_name:yup.string().min(5).max(30).required(),
        last_name: yup.string().min(5).max(30).required(),
        email: yup.string().min(1).required(),
        
        
      }) 
  const AddCustomer = () => {
    const notify=()=>toast("customer added successfully");

    const formik = useFormik({
      initialValues:{
        first_name:"",
        last_name: "",
        email: "",
        
      },
      validationSchema,
    })
    
    //const navigate=useNavigate();
     const handleSubmit=async()=>{
      try{
         CustomerService.addCustomer(formik.values).then(res_data => {
          console.log(res_data);
        notify();
       
        formik.resetForm();
       
    }).catch((error)=>{
    
     console.log("message",error.message)
    })
       } 
       catch(error){
        console.error('Error:', error.message);
        }}
  


     

     
    
  return (
    < div className='customer' >
      <ToastContainer/>
    
    <div style={{textAlign:"center"}}>
     
     <Card>
       <CardContent>
      
        <Typography sx={{fontWeight:"bold"}}>Add Customer</Typography>
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <Grid container direction="column" spacing={2}>

              <Grid item >
                  <TextField
                   sx={{ width: "100%" }}
                   label='First Name'
                   name="first_name"
                   variant='outlined'
                   value={formik.values.first_name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   placeholder=" add first name here" required
                   error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                   helperText={formik.touched.first_name && formik.errors.first_name }/>
                </Grid>
            
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
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name }/> 
                </Grid>
              
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
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}/> 
                </Grid>
              
              
                <Grid item>
                    <Button
                      sx={{ width: "100%" }}
                      variant='contained'
                      position='absolute'
                      onClick={handleSubmit}
                      disabled={(formik.errors.first_name||formik.errors.last_name||formik.errors.email)||
                      (!formik.values.first_name||!formik.values.last_name||!formik.values.email)}
                      > Add Customer
                    </Button>
                    </Grid>
                   
                   </Grid>
                  
               </Box>

    </CardContent>
   </Card>
   </div>
   </div>
    )
}

export default AddCustomer;


