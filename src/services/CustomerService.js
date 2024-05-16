import { APIService } from "./ApiService";
const  CustomerService = {
 addCustomer
  
};

function addCustomer(data) {
    return APIService.post("customer/addCustomer", data);
}

export default CustomerService;