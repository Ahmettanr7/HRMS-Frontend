import axios from "axios"

export default class CurriculumVitaeService{
    addAbility(ability){
        return axios.post("http://localhost:8080/api/cvs/abilities/add",ability)
    }
    getAbilitiesByUserId(userId){
        return axios.get("http://localhost:8080/api/abilities/getbyuserid?userId="+userId)
    }
    deleteAbility(id){
        return axios.post("http://localhost:8080/api/abilities/delete?id="+id)
    }


    
    addEducation(education){
        return axios.post("http://localhost:8080/api/cvs/eduations/add",education)
    }
    getEducationsByUserId(userId){
        return axios.get("http://localhost:8080/api/educations/getbyuserid?userId="+userId)
    }

    deleteEducation(educationId){
        return axios.post("http://localhost:8080/api/educations/delete?educationId="+educationId)
    }

   

    addExperience(experience){
        return axios.post("http://localhost:8080/api/cvs/experiences/add",experience)
    }
    getExperiencesByUserId(userId){
        return axios.get("http://localhost:8080/api/experiences/getbyuserid?userId="+userId)
    }
    deleteExperience(id){
        return axios.post("http://localhost:8080/api/experiences/delete?id="+id)
    }

    addLanguage(language){
        return axios.post("http://localhost:8080/api/cvs/languages/add",language)
    }
    getLanguagesByUserId(userId){
        return axios.get("http://localhost:8080/api/languages/getallbyuserid?userId="+userId)
    }
    deleteLanguage(id){
        return axios.post("http://localhost:8080/api/languages/delete?id="+id)
    }

    
    addSingleInfo(infos){
        return axios.post("http://localhost:8080/api/cvs/singleinfos/add",infos)
    }
    getSingleInfoByUserId(userId){
        return axios.get("http://localhost:8080/api/cv/getbyuserid?userId="+userId)
    }
    deleteSingleInfo(id){
        return axios.post("http://localhost:8080/api/cv/delete?id="+id)
    }
    
    addImage(){
        return axios.post("http://localhost:8080/cloudinary/images/upload")
    }


    
}