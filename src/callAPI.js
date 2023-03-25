import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://headbook.onrender.com/api/",
  withCredentials: true, 
  headers: {
    token:  "Bearer " + JSON.parse(localStorage.getItem("currentUser"))?.token,
  }
})