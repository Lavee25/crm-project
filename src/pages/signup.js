import React from 'react';
//import '../css/signup.css';
import signupImage from '../utils/sign up-07.jpg'
import{Link} from 'react-router-dom';
import authHelper from '../helper/authhelper';
// import Avatar from '@mui/material/Avatar';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import{
    Button,
    TextField,
    Typography,
    Grid,
    Card,
    CardContent,
    Box} from '@mui/material';
    //import { ToastContainer, toast } from 'react-toastify';
    //import 'react-toastify/dist/ReactToastify.css';
    import  {useFormik}  from 'formik';
    import * as yup from 'yup';
    import AuthService from '../services/AuthService'
    //import AuthHelper from '../helper/authhelper';
    const {useNavigate} =require('react-router-dom');




  const validationSchema=yup.object({
        first_name:yup.string().min(5).max(30).required(),
        last_name: yup.string().min(5).max(30).required(),
        email: yup.string().min(1).required(),
        password: yup.string().min(6).max(20).required()
        
      }) 
  const Signup = () => {

    const formik = useFormik({
        initialValues:{
          first_name:"",
          last_name: "",
          email: "",
          password: ""
        },
        validationSchema,
      })

    const navigate=useNavigate();
     const handleSubmit=async()=>{
      try{
         AuthService.register(formik.values).then(res_data => {
          console.log(res_data);
        authHelper.setToken(res_data.data.data.userToken);
        //dispatch(signupAction());
        console.log(res_data);
        formik.resetForm();
        navigate ('./inbox'); 
        //notify2()
    }).catch((error)=>{
     //notify1(error)
     console.log("message",error.message)
    })
       } 
       catch(error){
        console.error('Error:', error.message);
        }}
  


     

     
    
  return (
    < div className='signup' >
    
    <div style={{textAlign:"center"}}>
     
     <Card sx={{width:700,height:500}}>
       <CardContent>
        
       {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
        <Typography sx={{fontWeight:"bold"}}>Signup</Typography>
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <Grid container direction="column" spacing={2}>

              <Grid item sx={{width:"150"}}>
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
                  <TextField
                    sx={{ width: "100%" }}
                    label="Password"
                    name="password"
                    variant='outlined'
                    value={formik.values.password} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Add password here" required
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password }/> 
                </Grid>
              
                <Grid item>
                    <Button
                      sx={{ width: "100%" }}
                      variant='contained'
                      position='absolute'
                      onClick={handleSubmit}
                      disabled={(formik.errors.first_name||formik.errors.last_name||formik.errors.email||formik.errors.password)||
                      (!formik.values.first_name||!formik.values.last_name||!formik.values.email||!formik.values.password)}
                      > Signup
                    </Button>
                    </Grid>
                    <Grid>
                    <Typography>If You Have Register Account<Link to="/login">Login</Link></Typography>
                    </Grid>
                   </Grid>
                   <img src={signupImage} height={400} width={400} alt='not fount'></img>
               </Box>

    </CardContent>
   </Card>
   </div>
   </div>
    )
}

export default Signup;
