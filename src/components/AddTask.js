import React from 'react';
import {
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TaskService from '../services/TaskService';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const validationSchema = yup.object({
  task_details: yup.string().min(5).max(100).required(),
  due_date: yup.date().required(),
})
const AddTask = ({Id ,email}) => {
  const notify = () => toast(`New Task added to ${email} successfully`);

  const formik = useFormik({
    initialValues: {
      task_details: "",
      due_date: null,
    },
     validationSchema,
  })


  const handleSubmit = async () => {

    try {
      const formattedValues = {
        ...formik.values,
        due_date: formik.values.due_date ? formik.values.due_date.toISOString().substring(0, 10) : null
      };

      TaskService.AddNewTask(Id, formattedValues).then(res_data => {
        console.log(formik.values);
        console.log(res_data);
        notify();
        formik.resetForm();

      }).catch((error) => {
        console.log("error", error.message)
      })
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

 return (
    < div  >
      <ToastContainer autoClose={2000} />

      <div style={{ textAlign: "center" }}>

        <Card>
          <CardContent>

            <Typography sx={{ fontWeight: "bold" }}>Add Task To This Email</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Grid container direction="column" spacing={2}>

                <Grid item >
                  <TextField
                    sx={{ width: "100%" }}
                    label='Task_Details'
                    name="task_details"
                    variant='outlined'
                    value={formik.values.task_details}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder=" add task here" required
                    error={formik.touched.task_details && Boolean(formik.errors.task_details)}
                    helperText={formik.touched.task_details && formik.errors.task_details} />
                </Grid>
                <br></br>

                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      name="due_date"
                      label="Due_Date"
                      inputFormat="dd.MM.yyyy"
                      value={formik.values.due_date} // Pass the value from formik
                      onChange={(date) => formik.setFieldValue('due_date', date)}
                      onBlur={formik.handleBlur}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={formik.touched.due_date && Boolean(formik.errors.due_date)}
                          helperText={formik.touched.due_date && formik.errors.due_date}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <br></br>
                <Grid>
                  <Button
                    sx={{ width: "100%" }}
                    variant='contained'
                    position='absolute'
                    onClick={handleSubmit}

                  > Add Task
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

export default AddTask;


