import axios from "axios"

export default class EmployeeService{
    add(employee){
        return axios.post("http://localhost:8080/api/employees/add",employee)
    }

    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }

    getCvByUserId(){
        return axios.get("http://localhost:8080/api/employees/getcvbyuserid")
    }
}