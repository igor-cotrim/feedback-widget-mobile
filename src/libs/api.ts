import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.26.134.3:3333'
})