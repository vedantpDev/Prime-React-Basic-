import axios from "axios";

export class UserService {
  static getAllUsers() {
    return axios.get("https://randomuser.me/api?result=50");
  }
}
