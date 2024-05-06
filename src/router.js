import {
    BrowserRouter ,
    Routes,
    Route,
     } from "react-router-dom";
     //import Signup from './pages/Signup';
     import Login from "./pages/Login"
     import Inbox from "./pages/Inbox";
     import ContectUs from "./pages/ContectUs";
  
   
 function AppRouter(){
  
    return(
        <>
        <BrowserRouter>
           <Routes>
             <Route path="/"element={<ContectUs/>}/>
             {/* <Route path="signup" element={<Signup/>}/> */}
             <Route path="/adminLogin" element={<Login/>}/>
             <Route path="adminLogin/inbox" element={<Inbox/>}/> 
             <Route path="/logout" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
      
      </>
    )
    }

   
   export default AppRouter;