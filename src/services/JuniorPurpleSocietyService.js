import axios from "axios";
import { URLS } from "../constants/consts";

const JUNIOR_API_BASE_URL = URLS.baseURL+"/juniors";

class JuniorPurpleSociety {

    getLists() {
        return axios.get(JUNIOR_API_BASE_URL);
    }

    create(data) {
        return axios.post(JUNIOR_API_BASE_URL, data);
    }

    getById(id) {
        return axios.get(JUNIOR_API_BASE_URL + '/' + id);
    }

    update(data, id) {
        return axios.put(JUNIOR_API_BASE_URL + '/' + id, data);
    }

    delete(id) {
        return axios.delete(JUNIOR_API_BASE_URL + '/' + id);
    }
}

export default new JuniorPurpleSociety();
