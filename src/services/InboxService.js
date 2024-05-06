
import { APIService } from "./ApiService";
const  ContectUsService = {
  postMessage,
  getEmail,
  //login
};

function postMessage(data) {
    return APIService.post("inbox/aboutyou", data);
}
function getEmail() {
    return APIService.post("inbox/getemailCustomerData");
}

// function login(data) {
//   return APIService.post("auth/UserLogin", data);
// }

export default ContectUsService;