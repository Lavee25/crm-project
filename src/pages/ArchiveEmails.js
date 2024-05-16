import React, { useState, useEffect, useCallback } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArchiveEmailsDetails from '../components/ArchiveEmailsDetails';
import axios from 'axios';
import '../css/inbox.css';
import SearchAppBar from '../components/SideNavbar';



const ArchiveEmails = () => {
  const [emaildata, setEmaildata] = useState([]);

  const removeEmail = (emailId) => {
    setEmaildata((prevData) => prevData.filter((email) => email.id !== emailId));
    toast('Move to Inbox')
  };

  const handleSubmit = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/inbox/getemail-status-true")
      if (Array.isArray(response.data.data)) {
        setEmaildata(response.data.data)
      }
      else {
        console.error("Data is  not Array");
      }
    } catch (error) {
      console.error("error:", error.message);
    }

  }, []);
  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);
  return (
    <>
      < SearchAppBar />
      <ToastContainer autoClose={2000} />
      <div classname="inbox">
        {Array.isArray(emaildata) && emaildata.map((email) => (
          <ArchiveEmailsDetails
            key={email.id}
            email={email}
            onRemove={removeEmail}
          />))}
      </div>

    </>
  )
}

export default ArchiveEmails;

