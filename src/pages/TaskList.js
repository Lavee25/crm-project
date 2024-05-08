import React ,{useState,useEffect,useCallback}from 'react'
//import Navbar from '../components/Navbar';
import TaskDetails from '../pages/TaskDetails';
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
const[size,setSize]=useState(0);

  const handleSubmit =useCallback(async()=>{
    try{
    
    const response=await axios.get(`http://localhost:8000/api/v1/task/getTasks?page=${page}`)
    console.log(response);
  setTaskdata(response.data.taskdata)
  setTotalRecords(response.data.totalRecords)
  setSize(response.data.size);
  }catch(error){
      console.error("error:", error.message);
    }
   
  },[page]);
   useEffect(() => {
     handleSubmit(); 
    }, [handleSubmit]);

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
     <SearchAppBar/>
     <div >
    
    
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
          disabled={page * 5 >= totalRecords} // Disable if on the last page
        >
          Next Page
        </Button>
     
      
       
        <TaskDetails taskdata={taskdata} />
    </div>
     
    
    </>
  )
}

export default TaskList;
