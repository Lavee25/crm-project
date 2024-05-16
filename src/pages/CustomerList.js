import React, { useState, useEffect, useCallback } from 'react'
import CustomerDetails from '../components/CustomerDetails';
import axios from 'axios';
import { Button } from '@mui/material'
import SearchAppBar from '../components/SideNavbar';



const CustomerList = () => {
  const [customerdata, setCustomerdata] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [size, setSize] = useState(10);
  const [searchQuery, setSearchQuery] = React.useState('');


  const fetchCustomerData = useCallback(async () => {
    try {

      const response = await axios.get(`http://localhost:8000/api/v1/customer/getCustomers?page=${page}`);
     
      if (Array.isArray(response.data.customerData)) {
        setCustomerdata(response.data.customerData)
        setTotalRecords(response.data.totalRecords);
        setSize(response.data.size)

      }
      else {
        console.error("Data is  not Array");
      }
    } catch (error) {
      console.error("error:", error.message);
    }

  }, [page]);

  const fetchSearchCustomer = useCallback(async () => {
    try {

      const response = await axios.get(`http://localhost:8000/api/v1/customer/getCustomerbyname?name=${searchQuery}&page=${page}`);
    
      if (Array.isArray(response.data.customerData)) {
        setCustomerdata(response.data.customerData)
        setTotalRecords(response.data.totalRecords);
        setSize(response.data.size)

      }
      else {
        console.error("Data is  not Array");
      }
    } catch (error) {
      console.error("error:", error.message);
    }
  }, [searchQuery, page]);

  useEffect(() => {
    if (searchQuery) {
      fetchSearchCustomer();
    }
    else {
      fetchCustomerData();
    }
  }, [fetchSearchCustomer, fetchCustomerData, searchQuery]);

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (searchQuery.trim() === '') {
        fetchCustomerData();
      }
    }
  };
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }


  return (
    <>
      <SearchAppBar onSearch={handleSearch} onKeyPress={handleKeyPress} />


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
