import { APIService } from "./ApiService";
const  CustomerService = {
 addCustomer
  
};

function addCustomer(data) {
    return APIService.post("customer/addCustomer", data);
}
// function getEmail() {
//     return APIService.post("inbox/getemailCustomerData");
// }

// function login(data) {
//   return APIService.post("auth/UserLogin", data);
// }

export default CustomerService;