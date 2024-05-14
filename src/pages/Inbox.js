import React ,{useState,useEffect,useCallback}from 'react'
//import Navbar from '../components/Navbar';
import EmailDetails from './EmailDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../css/inbox.css';
import SearchAppBar  from  '../components/SideNavbar';
import {  Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Inbox = ({onSearch}) => {
  const[emaildata,setEmaildata]=useState([]);
  // const removeEmail = (emailId) => {
  //   setEmails((prevEmails) => prevEmails.filter((email) => email.id !== emailId));
  // };
  const removeEmail = (emailId) => {
    setEmaildata((prevData) => prevData.filter((email) => email.id !== emailId));
    toast('Move to Archive');
  };
  const navigate=useNavigate();

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

    // const handleSearch = useCallback((searchQuery) => {
    //   console.log("Search query:", searchQuery);
    //   navigate(`/admin/inbox/customer?name=${searchQuery}`);
    // }, [navigate]);
    //  const handleSearch = useCallback((searchQuery) => {
    //   console.log("Search query:", searchQuery);
    //   navigate(`/admin/inbox/customer?search=${searchQuery}`);
    //  }, [navigate]);
return (
     <>
      < SearchAppBar onSearchKeyPress={onSearch} />
      <ToastContainer
      autoClose={2000}/>
      <Button
        sx={{
        position: 'absolute', 
        left:10, 
        cursor: 'pointer' ,
        color:'black'
       }}
      
      onClick={()=>navigate('/admin/inbox/archive-emails')}>
       Archive Emails</Button>
      <div classname="inbox">
        
          {Array.isArray(emaildata) &&  emaildata.map((email)=>(
        <EmailDetails
        
        key={email.id}
        email={email}
       onRemove={removeEmail}
        />))}
        
    </div>
    
    </>
  )
}

export default Inbox;
