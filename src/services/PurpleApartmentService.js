import axios from "axios";
import { URLS } from "../constants/consts";

const APARTMENT_API_BASE_URL = URLS.baseURL+"/purpleapartments";

class PurpleApartmentService {

    getLists() {
        return axios.get(APARTMENT_API_BASE_URL);
    }

    create(data) {
        return axios.post(APARTMENT_API_BASE_URL, data);
    }

    getById(id) {
        return axios.get(APARTMENT_API_BASE_URL + '/' + id);
    }

    update(data, id) {
        return axios.put(APARTMENT_API_BASE_URL + '/' + id, data);
    }

    delete(id) {
        return axios.delete(APARTMENT_API_BASE_URL + '/' + id);
    }
}

export default new PurpleApartmentService();
