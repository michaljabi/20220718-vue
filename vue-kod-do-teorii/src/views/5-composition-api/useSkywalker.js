import { starWarsApi } from "@/services/starWarsApi";
import { ref, reactive, onMounted } from "vue";

export function useSkywalker() {
  const loading = ref(true);
  const errorMessage = ref("");
  const skywalker = reactive({});

  onMounted(() => {
    starWarsApi
      .getPeople(1)
      .then((response) => response.data)
      .then((data) => {
        loading.value = false;
        skywalker.name = data.name;
        skywalker.gender = data.gender;
      })
      .catch((err) => {
        loading.value = false;
        errorMessage.value = err.message;
      });
  });

  return { loading, errorMessage, skywalker };
}
