import '../css/log.css'
import * as React from 'react';
//import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
//import CssBaseline from '@mui/material/CssBaseline';
//import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import{
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  Box} from '@mui/material';
import  {useFormik}  from 'formik';
import * as yup from 'yup';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthService from '../services/AuthService';
import authHelper from '../helper/authhelper';
import signupImage from '../utils/sign up-07.jpg'
const {useNavigate} =require('react-router-dom');

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//   
  //    Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.
const validationSchema=yup.object({
    email: yup.string().min(1).required(),
    password: yup.string().min(6).max(20).required()
})


//const defaultTheme = createTheme();

export default function SignIn() {

    const formik = useFormik({
        initialValues:{
          email: "",
          password: ""
        },
        validationSchema,
      })


const navigate=useNavigate();
  const handleSubmit = async() => {
    try{
      AuthService.login(formik.values).then(res_data => {
       console.log(res_data.data.adminToken);
       authHelper.setToken(res_data.data.adminToken);
     
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
    
    <div className='log'>
      <div style={{textAlign:"center"}}>
        <Card sx={{width:700,height:450}}>
          <CardContent>           
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Grid container direction="column" spacing={2}>
          <Grid item sx={{width:"150"}}>
            <TextField
              margin="normal"
              required
              fullWidth
             //id="email"
              label="Email Address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder=" add first name here"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email }
              autoComplete="email"
              autoFocus
            />
            </Grid>
            <Grid item> 
            <TextField
              margin="normal"
              required
             fullWidth
              name="password"
              label="Password"
              //type="password"
              //id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder=" add password here"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password }
              //autoComplete="current-password"
            /></Grid>
            
            <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              disabled={(formik.errors.email||formik.errors.password)||
              (!formik.values.email||!formik.values.password)}
            >
              Log In
            </Button>
            </Grid>
            </Grid>
            <img src={signupImage} height={350} width={350} alt='not fount'></img>
          </Box>
      </CardContent>
      </Card>
      </div>
      </div>
    
  );
}

