import axios from "axios";
import { URLS } from "../constants/consts";

const OURWORK_API_BASE_URL = URLS.baseURL+"/ourworks";

class OurWorkService {

    getLists() {
        return axios.get(OURWORK_API_BASE_URL);
    }

    create(ourWork) {
        return axios.post(OURWORK_API_BASE_URL, ourWork);
    }

    getById(ourWorkId) {
        return axios.get(OURWORK_API_BASE_URL + '/' + ourWorkId);
    }

    update(ourWork, ourWorkId) {
        return axios.put(OURWORK_API_BASE_URL + '/' + ourWorkId, ourWork);
    }

    delete(ourWorkId) {
        return axios.delete(OURWORK_API_BASE_URL + '/' + ourWorkId);
    }
}

export default new OurWorkService();
