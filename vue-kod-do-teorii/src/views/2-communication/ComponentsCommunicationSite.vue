<template>
  <div>
    <h1>2. Komunikacja pomiędzy komponentami</h1>
    <AlertMessage
      v-if="!isClosed"
      :message="errorMessage"
      :type="alertType"
      @close="handleAlertClose()"
    />

    <div class="centered">
      <button @click="openAlert('danger')">Danger</button>
      <button @click="openAlert('warning')">Warning</button>
    </div>

    <div class="explanation">
      Przydatne podczas pisania aplikacji:
      <a
        href="https://devtools.vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
        >Vue Devtools</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AlertMessage from "./components/AlertMessage.vue";

const isClosed = ref(false);
const alertType = ref("danger");
const errorMessage = ref("Wystąpił błąd 404, spróbuj ponownie");

function openAlert(classType) {
  isClosed.value = false;
  alertType.value = classType;
}

function handleAlertClose() {
  isClosed.value = !isClosed.value;
}

/*
  // Alternatywnie [Options API]

export default {
  name: 'ComponentsCommunicationSite',
  components: { AlertMessage },
  data() {
    return {
      isClosed: false,
      alertType: 'danger',
      errorMessage: 'Wystąpił błąd 404, spróbuj ponownie',
    };
  },
  methods: {
    openAlert(classType) {
      this.isClosed = false;
      this.alertType = classType;
    },
    handleAlertClose() {
      this.isClosed = !this.isClosed;
    },
  },
};

*/
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
