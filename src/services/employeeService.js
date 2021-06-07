import axios from "axios"

export default class EmployeeService{
    add(){
        return axios.create("http://localhost:8080/api/employees/add")
    }

    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }

    getCvByUserId(){
        return axios.get("http://localhost:8080/api/employees/getcvbyuserid")
    }
}