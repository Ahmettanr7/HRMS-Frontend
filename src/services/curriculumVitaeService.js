import axios from "axios"

export default class CurriculumVitaeService{
    addAbility(){
        return axios.create("http://localhost:8080/api/cvs/abilities/add")
    }
    addAbilities(){
        return axios.create("http://localhost:8080/api/cvs/abilities/addList")
    }

    addEducation(){
        return axios.create("http://localhost:8080/api/cvs/eduations/add")
    }

    addExperience(){
        return axios.create("http://localhost:8080/api/cvs/experiences/add")
    }

    addLanguage(){
        return axios.create("http://localhost:8080/api/cvs/languages/add")
    }

    addSingleInfo(){
        return axios.create("http://localhost:8080/api/cvs/singleinfos/add")
    }
    
    addSingleInfo(){
        return axios.create("http://localhost:8080/cloudinary/images/upload")
    }
}