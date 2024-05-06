import { APIService } from "./ApiService";
const  AuthService = {
  register,
  login
};

function register(data) {
    return APIService.post("admin/adminSignup", data);
}
function login(data) {
   return APIService.post("admin/adminLogin", data);
 }

export default AuthService;