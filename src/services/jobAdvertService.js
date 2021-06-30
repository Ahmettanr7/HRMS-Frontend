import axios from "axios"

export default class JobAdvertService{
    add(jobAdvert){
        return axios.post("http://localhost:8080/api/jobadverts/add",jobAdvert)
    }
    
    closeAdvertAdmin(jobAdvertId){
        return axios.post("http://localhost:8080/api/jobadverts/closeAdvertAdmin?jobAdvertId="+jobAdvertId)
    }

    closeAdvert(jobAdvertId){
        return axios.post("http://localhost:8080/api/jobadverts/closeAdvert?jobAdvertId="+jobAdvertId)
    }

    confirmAdvert(jobAdvertId){
        return axios.post("http://localhost:8080/api/jobadverts/confirmAdvert?jobAdvertId="+jobAdvertId)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/jobadverts/getall")
    }

    getAllByUserId(userId){
        return axios.get("http://localhost:8080/api/jobadverts/getByUserIdAndSortByAdvertDateDesc?userId="+userId)
    }

    getActiveJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getActiviteAdvertsByAdvertDateDescc")
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

    getByJobAdvertId(jobAdvertId){
        return axios.get("http://localhost:8080/api/jobadverts/getbyjobadvertid?jobAdvertId="+ jobAdvertId)
    }
    
    getByFilter(cityId,positionId,placeTypeId,timeTypeId){
        return axios.get(`http://localhost:8080/api/jobadverts/getAllByPlaceAndTimeAndActive?cityId=${cityId}&placeTypeId=${placeTypeId}&positionId=${positionId}&timeTypeId=${timeTypeId}`)
    }

    getPageable(pageNo,pageSize) {
        return axios.get("http://localhost:8080/api/jobadverts/getActiviteAdvertsByAdvertDateDesc?pageNo="+pageNo+"&pageSize="+pageSize)
    }



    
}