//mport { AddTask } from "@mui/icons-material";
import { APIService } from "./ApiService";
const  TaskService = {
  AddNewTask

};

function AddNewTask(id,data) {

    return APIService.post(`task/addTask/${id}`, data);
}


export default TaskService;