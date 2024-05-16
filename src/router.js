import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login"
import Inbox from "./pages/Inbox";
import ContectUs from "./pages/ContectUs";
import CustomerList from "./pages/CustomerList";
import authHelper from "./helper/authhelper";
import CustomerEmail from "./pages/CustomerEmail";
import TaskList from "./pages/TaskList";
import ArchiveEmails from "./pages/ArchiveEmails";




function AppRouter() {
  const isLoggedIn = authHelper.isAuthenticated();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContectUs />} />
          <Route path="/admin/login" element={<Login />} />

          {isLoggedIn ? (
            <>

              <Route path="admin/inbox" element={<Inbox />} />
              <Route path="admin/inbox/archive-emails" element={<ArchiveEmails />} />
              <Route path="admin/inbox/email/:id" element={<CustomerEmail />} />
              <Route path="admin/inbox/customer-list" element={<CustomerList />} />
              <Route path="admin/inbox/task-list" element={<TaskList />} />

            </>) : (
            
              <Route path="/logout" element={<Login />} />
            )}
        </Routes>
      </BrowserRouter>

    </>
  )
}


export default AppRouter;