import { ref } from "vue/dist/vue.esm-bundler";

export default {
  template: `
    <button @click="count++">{{count}}</button>     
  `,
  setup() {
    return { count: ref(0) };
  },
};
