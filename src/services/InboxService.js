
import { APIService } from "./ApiService";
const  InboxService = {
  postMessage,
  getEmail,
 getEmailById
};

function postMessage(data) {
    return APIService.post("inbox/aboutyou", data);
}
function getEmail() {
    return APIService.post("inbox/getemailCustomerData");
}
function getEmailById(id) {
  return APIService.post(`inbox/getemailCustomerData/${id}`);
}

export default InboxService;