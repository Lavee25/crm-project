import {
    BrowserRouter ,
    Routes,
    Route,
     } from "react-router-dom";
     //import Signup from './pages/Signup';
     import Login from "./pages/Login"
     import Inbox from "./pages/Inbox";
     import ContectUs from "./pages/ContectUs";
     import CustomerList from "./pages/CustomerList";
     import authHelper from "./helper/authhelper";
 function AppRouter(){
  const isLoggedIn = authHelper.isAuthenticated();
    return(
        <>
        <BrowserRouter>
           <Routes>
             <Route path="/"element={<ContectUs/>}/>
             <Route path="*" element={<Login/>}/>
             <Route path="/admin/login" element={<Login/>}/>
             {/* <Route path="/adminLogin/inbox" element={<Inbox/>}/>  */}
             {isLoggedIn ? (
               <>
                {/* <Route path="/adminLogin/inbox" element={<Inbox/>}/>  */}
                <Route path="admin/inbox" element={<Inbox/>}/>
                <Route path="admin/inbox/customer-list" element={<CustomerList/>}/>
             </>) : (
              <>
              {/* <Route path="/adminLogin/inbox" element={<Login/>}/> 
              <Route path="/adminLogin/inbox/customerList" element={<Login/>}/> */}
               <Route path="/logout" element={<Login/>}/>
               </>)}
            </Routes>
        </BrowserRouter>
      
      </>
    )
    }

   
   export default AppRouter;