import axios from "axios";
import { URLS } from "../constants/consts";

const API_URL = URLS.baseURL +"/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("token", response.data.accessToken);
          this.setHeaderToken(response.data.accessToken);
        }

        return Promise.resolve(response.data);
      })
      .catch(err => {
        console.error('Auth Service Error', err);
        return Promise.reject(err);
      })
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  setHeaderToken(token) {
    if(token) {
      axios.defaults.headers.common['x-access-token'] = token;
    } else {
      delete axios.defaults.headers.common['x-access-token'];
    }
  }
}

export default new AuthService();
