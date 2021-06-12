import axios from "axios"

export default class JobTypeService{
    getAllTypeOfTime(){
        return axios.get("http://localhost:8080/api/jobtypes/getalltime")
    }

    getAllTypeOfPlace(){
        return axios.get("http://localhost:8080/api/jobtypes/getallplace")
    }
}