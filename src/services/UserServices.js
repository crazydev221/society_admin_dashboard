import axios from "axios";
import { URLS } from "../constants/consts";
import AuthServices from "./AuthServices";

const API_URL = URLS.baseURL + "/test/";

class UserService {

    getPublicContent() {
        return axios.get(API_URL + "all");
    }

    getUserBoard() {
        AuthServices.setHeaderToken(localStorage.getItem('token'));
        return axios.get(API_URL + "user");
    }
}

export default new UserService();
