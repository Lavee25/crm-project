import React,{useState,useEffect} from 'react'
//import { useParams } from 'react-router-dom';
import axios from 'axios'
//import { useParams } from 'react-router-dom';
//import { ToastContainer, toast } from 'react-toastify';
import CustomerPageDetails from '../pages/CustomerPageDetails';
//import SearchIcon from '@mui/icons-material/Search';
//import CustomerPageDetails from './CustomerPageDetails';
//import SearchAppBar from '../components/SideNavbar';

const CustomerPage = ({SearchValue}) => {
   
    const[customerdata,setCustomerdata]=useState([]);
    //const{params}=useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/customer/getCustomerbyname?name=${SearchValue}`);
        setCustomerdata(response.data.customerData);
      } catch (error) {
        console.error("Error fetching customer data:", error.message);
      }
    };

     //if (searchValue.trim() !== '') {
      fetchData();
    //} else {
      //setCustomerdata([]); // Reset customer data if searchValue is empty
    //}
   }, [SearchValue]);
  return (
      <>
      
      {customerdata.map((customer)=>(
        <CustomerPageDetails
         key={customer.id}
         customer={customer}
      
        />))} 
    
</>
  )
}

export default CustomerPage;
