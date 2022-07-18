<template>
  <button @click="logInUser('Janusz', 'janusz@kowalsky.pl')">
    Zaloguj User'a
  </button>
  <button @click="logOutUser()">Wyloguj User'a</button>
</template>

<script>
import { logInUser, logOutUser } from "../useSharedState";

export default {
  name: "UserPanelControls",
  setup() {
    return { logInUser, logOutUser };
  },
};
</script>

<style scoped></style>
