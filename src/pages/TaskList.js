import React ,{useState,useEffect,useCallback}from 'react'
//import Navbar from '../components/Navbar';
import TaskDetails from '../components/TaskDetails';
//import ContectUsService from '../services/InboxService';
import axios from 'axios';
//import '../css/inbox.css';
import{Button} from '@mui/material'
//import SearchAppBar  from  '../components/SideNavbar';
import SearchAppBar from '../components/SideNavbar';


const TaskList = () => {
  const[taskdata,setTaskdata]=useState([]);
  const [page,setPage] = useState(1);             
  const [totalRecords, setTotalRecords] = useState(0);
  const[size,setSize]=useState(10);
  const[searchQuery,setSearchQuery]=React.useState('');

  
  const fetchTaskData =useCallback(async()=>{
    try{
    
    const response=await axios.get(`http://localhost:8000/api/v1/task/getTasks?page=${page}`);
    //console.log(response);
    if(Array.isArray(response.data.taskdata)){
      setTaskdata(response.data.taskdata)
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

  const fetchSearchTask=useCallback(async()=>{
    try{
    
    const response=await axios.get(`http://localhost:8000/api/v1/task/getTasksbyEmail?task_details=${searchQuery}&page=${page}`);
    //console.log(response);
   if(Array.isArray(response.data.taskdata)){
      setTaskdata(response.data.taskdata)
       //console.log('taskdata',taskdata)
      setTotalRecords(response.data.totalRecords);
      setSize(response.data.size)
      
     
    }
 else {
  console.error("Data is  not Array");
 }
  }catch(error){
      console.error("error:", error.message);
    }
   
  },[searchQuery,page]);

 useEffect(() => {
    if (searchQuery) {
      fetchSearchTask();
       }
    else {
      fetchTaskData();
    }
  }, [fetchSearchTask, fetchTaskData, searchQuery]);

  const handleSearch=(value)=>{
    setSearchQuery(value)
  }



    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
      };
      
      const handlePreviousPage = () => {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      };

return (
  <>
     <SearchAppBar onSearch={handleSearch}/>
    
    
   
  <TaskDetails taskdata={taskdata} pageNumber={page} pageSize={size}/>
 
     <Button
          onClick={handlePreviousPage}
          variant='contained'
          disabled={page <= 1} 
        >
          Previous Page
        </Button>
        <Button
          variant='contained'
          onClick={handleNextPage}
          disabled={page * 10 >= totalRecords} 
        >
          Next Page
        </Button>
      </>
  )
}

export default TaskList;
