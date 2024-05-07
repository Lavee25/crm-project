import React ,{useState,useEffect,useCallback}from 'react'
//import Navbar from '../components/Navbar';
import EmailDetails from './EmailDetails';
//import ContectUsService from '../services/InboxService';
import axios from 'axios';
import '../css/inbox.css';
import{Card,CardContent,Box, Typography} from '@mui/material'
import SearchAppBar  from  '../components/SideNavbar';



const Inbox = () => {
  const[emaildata,setEmaildata]=useState({});
  
  const handleSubmit =useCallback(async()=>{
    try{
    //   ContectUsService.getEmail.then((res_data)=>{
    //   console.log(res_data);
    //   if(Array.isArray(res_data.data.data)){
    //   setEmaildata(res_data.data);
    //   }
    // }
    // ).catch((err)=>{
    //     console.log({"error:":err.message})
    //   })
    const response=await axios.get("http://localhost:8000/api/v1/inbox/getemailCustomerData")
    if(Array.isArray(response.data.data)){
      setEmaildata(response.data.data)
    }
  else {
    console.error("Data is  not Array");
  }
  }catch(error){
      console.error("error:", error.message);
    }
   
  },[]);
   useEffect(() => {
     handleSubmit(); 
    }, [handleSubmit]);
return (
     <>
      < SearchAppBar/>
      {/* <Navbar/> */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end',  }}>
        <Card sx={{ width: 933 ,height:50, borderRadius: '5px', }}>
        <CardContent>
         <Typography variant='h6' sx={{textAlign:'left'}}>Waiting for you.....</Typography>
        </CardContent></Card></Box>
     
      <div classname="inbox">
       {Array.isArray(emaildata) &&  emaildata.map((email)=>(
        <EmailDetails
        key={email.id}
        email={email}
        />))}
    </div>
    
    </>
  )
}

export default Inbox;
// border: '2px solid black', 
//         padding: '10px', 
//         borderRadius: '5px', 
//         backgroundColor: '#f0f0f0'