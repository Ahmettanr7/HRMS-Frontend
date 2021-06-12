import axios from "axios"

export default class EmployerService{
    add(employer){
        return axios.post("http://localhost:8080/api/employers/add",employer)
    }

    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
}