import axios from "axios";
export default class EmployerUpdateService{
    add(update){
        return axios.post("http://localhost:8080/api/employerupdates/add",update)
    }
    confirm(id){
        return axios.post("http://localhost:8080/api/employerupdates/confirm?id="+id)
    }

    getAllPendingUpdates(){
        return axios.get("http://localhost:8080/api/employerupdates/getallpendingupdates")
    }

    getByUserId(userId){
        return axios.get("http://localhost:8080/api/employerupdates/getbyuserid?userId="+userId)
    }
}