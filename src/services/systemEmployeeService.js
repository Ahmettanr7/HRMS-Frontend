import axios from "axios"

export default class SystemEmployeeSerivce{
    add(systemEmployee){
        return axios.post("http://localhost:8080/api/systememployees/add",systemEmployee)
    }

    update(systemEmployee){
        return axios.post("http://localhost:8080/api/systememployees/update",systemEmployee)
    }

    getSystemEmployees(){
        return axios.get("http://localhost:8080/api/systememployees/getall")
    }

    getSystemEmployeesByEmail(){
        return axios.get("http://localhost:8080/api/systememployees/getByEmail")
    }

    getByUserId(userId){
        return axios.get("http://localhost:8080/api/systememployees/getByUserId?userId="+userId)
    }
}