import axios from "axios";

export default class FavoriteService{
    add(favorite){
        return axios.post("http://localhost:8080/api/favorites/add",favorite)
    }
    getAllByUserId(userId){
        return axios.get("http://localhost:8080/api/favorites/getbyuserid?userId="+userId)
    }
    delete(id){
        return axios.post("http://localhost:8080/api/favorites/delete?id="+id)
    }
}