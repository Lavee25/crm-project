import React ,{useState,useEffect,useCallback}from 'react'
//import Navbar from '../components/Navbar';
import EmailDetails from './EmailDetails';
//import ContectUsService from '../services/InboxService';
import axios from 'axios';
import '../css/inbox.css';
//import{Card,CardContent,Box, Typography} from '@mui/material'
import SearchAppBar  from  '../components/SideNavbar';



const Inbox = () => {
  const[emaildata,setEmaildata]=useState({});
  
  const handleSubmit =useCallback(async()=>{
    try{
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
