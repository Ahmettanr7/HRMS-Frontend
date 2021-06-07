import axios from "axios"

export default class EmployerService{
    add(){
        return axios.create("http://localhost:8080/api/employers/add")
    }

    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
}