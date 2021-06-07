import axios from "axios"

export default class SystemEmployeeSerivce{
    add(){
        return axios.create("http://localhost:8080/api/systememployees/add")
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