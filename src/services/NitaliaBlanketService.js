import axios from "axios";
import { URLS } from "../constants/consts";

const NITALIABLANKET_API_BASE_URL = URLS.baseURL+"/nitaliablankets";

class NitaliaBlanketService {

    getLists() {
        return axios.get(NITALIABLANKET_API_BASE_URL);
    }

    create(data) {
        return axios.post(NITALIABLANKET_API_BASE_URL, data);
    }

    getById(id) {
        return axios.get(NITALIABLANKET_API_BASE_URL + '/' + id);
    }

    update(data, id) {
        return axios.put(NITALIABLANKET_API_BASE_URL + '/' + id, data);
    }

    delete(id) {
        return axios.delete(NITALIABLANKET_API_BASE_URL + '/' + id);
    }
}

export default new NitaliaBlanketService();
