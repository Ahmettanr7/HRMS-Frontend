import axios from "axios"

export default class SystemEmployeeSerivce{
    add(systemEmployee){
        return axios.post("http://localhost:8080/api/systememployees/add",systemEmployee)
    }

    getSystemEmployees(){
        return axios.get("http://localhost:8080/api/systememployees/getall")
    }

    getSystemEmployeesByEmail(){
        return axios.get("http://localhost:8080/api/systememployees/getByEmail")
    }

    getSystemEmployeesByUserId(){
        return axios.get("http://localhost:8080/api/systememployees/getByUserId")
    }
}