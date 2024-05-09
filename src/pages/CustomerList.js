import React ,{useState,useEffect,useCallback}from 'react'

import CustomerDetails from '../pages/CustomerDetails';
//import ContectUsService from '../services/InboxService';
import axios from 'axios';
//import '../css/inbox.css';
import{Button} from '@mui/material'
//import SearchAppBar  from  '../components/SideNavbar';
import SearchAppBar from '../components/SideNavbar';


const CustomerList = () => {
  const[customerdata,setCustomerdata]=useState([]);
  const[page,setPage]=useState(1);
  const[totalRecords,setTotalRecords]=useState(0);
  const[size,setSize]=useState(10);
  
  const handleSubmit =useCallback(async()=>{
    try{
    
    const response=await axios.get(`http://localhost:8000/api/v1/customer/getCustomers?page=${page}`);
    //console.log(response);
    if(Array.isArray(response.data.customerData)){
      setCustomerdata(response.data.customerData)
      setTotalRecords(response.data.totalRecords);
      setSize(response.data.size)
     
    }
  else {
    console.error("Data is  not Array");
  }
  }catch(error){
      console.error("error:", error.message);
    }
   
  },[page]);
   useEffect(() => {
     handleSubmit(); 
    }, [handleSubmit]);
 
    const handleNextPage=()=>{
      setPage((prevPage)=>prevPage+1);
     }

     const handlePreviousPage=()=>{
       if(page>1){
        setPage((prevPage)=>prevPage-1);
       }
     }

    
return (
     <>
     <SearchAppBar/>
 
    
     <CustomerDetails customerdata={customerdata} pageNumber={page} pageSize={size} />
     <Button
          onClick={handlePreviousPage}
          variant='contained'
          disabled={page <= 1} // Disable if on the first page
        >
          Previous Page
        </Button>
        <Button
          variant='contained'
          onClick={handleNextPage}
          disabled={page * 10 >= totalRecords} // Disable if on the last page
          >
          Next Page
        </Button>
     
    
    </>
  )
}

export default CustomerList;
