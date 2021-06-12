import axios from "axios"

export default class JobAdvertService{
    add(jobAdvert){
        return axios.post("http://localhost:8080/api/jobadverts/add",jobAdvert)
    }
    //Düzenlenecek
    closeAdvert(){
        return axios.create("http://localhost:8080/api/jobadverts/closeAdvert")
    }

    getActiveJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getActiviteAdvertsByAdvertDateDesc")
    }

    getAllByCityId(){
        return axios.get("http://localhost:8080/api/jobadverts/getallbycityid")
    }

    getAllByCityName(){
        return axios.get("http://localhost:8080/api/jobadverts/getallbycityname")
    }

    getActiveJobAdvertsDto(){
        return axios.get("http://localhost:8080/api/jobadverts/getJobAdvertDtoActiveAdvertsByDate")
    }

    getByJobAdvertId(jobAdvertId){
        return axios.get("http://localhost:8080/api/jobadverts/getbyjobadvertid?jobAdvertId="+ jobAdvertId)
    }
    
}