import React, { useState, useEffect, useCallback } from 'react'
//import Navbar from '../components/Navbar';
import EmailDetails from '../components/EmailDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
//import '../css/inbox.css';
import SearchAppBar from '../components/SideNavbar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//import InboxSidebar from '../components/InboxSidebar';



const Inbox = () => {
  const [emaildata, setEmaildata] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const removeEmail = (emailId) => {
    setEmaildata((prevData) => prevData.filter((email) => email.id !== emailId));
    toast('Move to Archive');
  };
  const navigate = useNavigate();

  const fetchEmailData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/inbox/getemailCustomerData");
      if (Array.isArray(response.data.data)) {
        setEmaildata(response.data.data);
      } else {
        console.error("Data is not an array");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, []);

  const fetchSearchEmail = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/inbox/getemailCustomerDatabyEmail?email=${searchQuery}`);
      if (Array.isArray(response.data.data)) {
        setEmaildata(response.data.data);
      } else {
        console.error("Data is not an array");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      fetchSearchEmail();
      if (!searchQuery) {
        fetchEmailData();
      }
    } else {
      fetchEmailData();
    }
  }, [fetchSearchEmail, fetchEmailData, searchQuery]);

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (searchQuery.trim() === '') {
        fetchEmailData();
      }
    }
  };


  return (
    
    <>
    <SearchAppBar  onSearch={handleSearch} onKeyPress={handleKeyPress}/> 
    <ToastContainer/>
    <Button
        sx={{
          cursor: 'pointer',
          color: 'black',
          position: 'absolute', 
          left:10,
        }}
        onClick={() => navigate('/admin/inbox/archive-emails')}
      >
        Archive Emails
      </Button>
    {Array.isArray(emaildata) && emaildata.map((email) => (
      <EmailDetails
      key={email.id}
      email={email}
      onRemove={removeEmail}
      />
    ))}
    </>
    
   
  )
}

export default Inbox;
