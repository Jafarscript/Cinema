import axios from "axios";
const instance = axios.create({
  baseURL: "https://omdbapi.com/?apikey=507fecc9",
});
export default instance;
