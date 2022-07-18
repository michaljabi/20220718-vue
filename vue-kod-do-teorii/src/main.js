import { createApp } from "vue";
import { createPinia } from "pinia";
import stringManipulationPlugin from "@/plugins/stringManipulationPlugin";

import "./styles.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(stringManipulationPlugin);
app.directive("bg-highlight", {
  beforeMount(el) {
    el.addEventListener("mouseover", () => {
      el.style.backgroundColor = "yellow";
    });
    el.addEventListener("mouseout", () => {
      el.style.backgroundColor = "";
    });
  },
});

app.mount("#app");
