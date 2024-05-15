import axios from 'axios';
import { URLS } from "../constants/consts";

const SUPPORT_API_BASE_URL = URLS.baseURL + "/supports/";

class SupportService {

    getLists() {
        return axios.get(SUPPORT_API_BASE_URL);
    }

    create(data) {
        return axios.post(SUPPORT_API_BASE_URL, data);
    }

    getById(id) {
        return axios.get(SUPPORT_API_BASE_URL + id);
    }

    update(data, id) {
        return axios.put(SUPPORT_API_BASE_URL + id, data);
    }

    delete(id) {
        return axios.delete(SUPPORT_API_BASE_URL + id);
    }
}

export default new SupportService()