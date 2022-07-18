import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const starWarsApi = {
  getPeople(id) {
    return axiosInstance.get(`people/${id}/`);
  },
};
