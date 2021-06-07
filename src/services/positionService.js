import axios from "axios"

export default class PositionService{
    add(){
        return axios.create("http://localhost:8080/api/positions/add")
    }

    getPositions(){
        return axios.get("http://localhost:8080/api/positions/getall")
    }
}