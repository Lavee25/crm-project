import React from 'react';
import "../css/contect.css";
import contectImage from '../utils/122.jpg';
import { ToastContainer, toast } from 'react-toastify';
import ContectUsService from '../services/InboxService';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  first_name: yup.string().min(5).max(30).required(),
  last_name: yup.string().min(5).max(30).required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  body: yup.string().required()
})

const ContectUs = () => {
  const notify = () => toast("Thankyou!,Our team will contect you soon")
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
      body: ""
    },
    validationSchema,
  })
  const handleSubmit = () => {
    try {
      ContectUsService.postMessage(formik.values).then(res_data => {
        console.log(res_data);
        formik.resetForm();
        notify()
      }).catch((error) => {
        console.log("message", error.message)
      })
    }
    catch (error) {
      console.error('Error:', error.message);
    }
  }
  return (
    <div className='contect'>
      <ToastContainer />
      <div style={{ textAlign: "center" }}>
        <Card sx={{ width: 800 }}>
          <CardContent>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Contact Us</Typography>
            <br></br>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Grid container direction="column" spacing={2}>

                <Grid item sx={{ width: "150" }}>
                  <TextField
                    sx={{ width: "100%" }}
                    label='First Name'
                    name="first_name"
                    variant='outlined'
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder=" Add first name here" required
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name} />
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
                    helperText={formik.touched.last_name && formik.errors.last_name} />
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
                    placeholder="Add your email here" required
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email} />
                </Grid>

                <Grid item>
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-multiline-flexible"
                    name="subject"
                    label="Subject"
                    multiline
                    maxRows={2}
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    placeholder="Add a subject here" required
                    onBlur={formik.handleBlur}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject} />

                </Grid>
                <Grid item>
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-multiline-flexible"
                    label="Message"
                    name="body"
                    multiline
                    maxRows={4}
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    placeholder="Add your message here" required
                    onBlur={formik.handleBlur}
                    error={formik.touched.body && Boolean(formik.errors.body)}
                    helperText={formik.touched.body && formik.errors.body} />
                </Grid>

                <Grid item>
                  <Button
                    sx={{ width: "100%" }}
                    variant='contained'
                    position='absolute'
                    onClick={handleSubmit}
                    disabled={(formik.errors.first_name || formik.errors.last_name || formik.errors.email) ||
                      (!formik.values.first_name || !formik.values.last_name || !formik.values.email)}
                  >Submit
                  </Button>
                </Grid>
              </Grid>
              <img src={contectImage} height={400} width={400} alt='not fount'></img>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContectUs
