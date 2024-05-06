import React from 'react'
import { AppBar,Button,Toolbar} from '@mui/material'
import {Link }from 'react-router-dom';
import authHelper from '../helper/authhelper';
//import { SearchIcon,SearchIconWrapper,StyledInputBase } from '@mui/icons-material'


const Navbar = () => {
  const handleLogout = () => {
    authHelper.removeToken(); 
    window.location.href = '/adminLogin';
  
  };
  
  return (
 <React.Fragment>
     <AppBar position="static" sx={{backgroundColor:"#5072A7",height:"60px",marginTop:"5px",marginBottom:"10px"}}>
      <Toolbar>
        {/* <Link to="/"  style={{color:"white"}}><HomeIcon/></Link> */}
        {/* <Link to="/addAccount" > */}
           <Button style={{ color:"white" }}>
            ➕AddAccount
           </Button>
        {/* </Link> */}
        <Link to="/addTask"> 
           <Button  style={{color:"white",}}>
            ➕AddTask
           </Button>
        </Link>
         <Link to="/acount&setting" >
            <Button style={{marginLeft:"800px" ,color:"white",}}>
            Account&Settings
            </Button>
        </Link>
        <Link to="/logout" style={{marginLeft:"auto",color:"black",textDecoration:'none' }}>
            <Button  variant='contained' onClick={handleLogout}>
                LogOut
            </Button>
        </Link>
      </Toolbar>
    </AppBar>
 </React.Fragment>
  )
}

export default Navbar;