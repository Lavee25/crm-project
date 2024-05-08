import React ,{useState,useEffect,useCallback}from 'react'
//import Navbar from '../components/Navbar';
import CustomerDetails from '../pages/CustomerDetails';
//import ContectUsService from '../services/InboxService';
import axios from 'axios';
//import '../css/inbox.css';
//import{Button} from '@mui/material'
//import SearchAppBar  from  '../components/SideNavbar';
import SearchAppBar from '../components/SideNavbar';


const CustomerList = () => {
  const[customerdata,setCustomerdata]=useState([]);
  
  
  const handleSubmit =useCallback(async()=>{
    try{
    
    const response=await axios.get('http://localhost:8000/api/v1/customer/getCustomers')
    //console.log(response);
    if(Array.isArray(response.data.customerData)){
      setCustomerdata(response.data.customerData)
     // setTotalRecords(response.data.totalRecords);
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
     <SearchAppBar/>
     <div >
    
     <CustomerDetails customerdata={customerdata} />
    </div>
     
    
    </>
  )
}

export default CustomerList;
