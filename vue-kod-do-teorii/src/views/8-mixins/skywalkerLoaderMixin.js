import { starWarsApi } from "@/services/starWarsApi";

export const skywalkerPreloaderMixin = {
  data() {
    return {
      loading: true,
      errorMessage: "",
      skywalker: {},
    };
  },
  created() {
    starWarsApi
      .getPeople(1)
      .then((response) => response.data)
      .then((data) => {
        this.loading = false;
        this.skywalker = {
          name: data.name,
          gender: data.gender,
        };
      })
      .catch((err) => {
        this.loading = false;
        this.errorMessage = err.message;
      });
  },
};
