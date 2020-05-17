import axios from "axios";
import { BASE_URL, REQUEST_TIMEOUT } from "../constants";

class ApiLibrary {
  constructor() {
    let timeout = Number(REQUEST_TIMEOUT);
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: timeout
    });
  }
  setAuthorizationToken(token) {
    if (token) {
      this.instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      delete this.instance.defaults.headers.common["Authorization"];
    }
  }
  request(config) {
    return this.instance.request(config);
  }
}

const api = new ApiLibrary();
export { api };
