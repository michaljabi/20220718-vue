<template>
  <section>Użytkownik {{ user.name }} jest: {{ authTextStatus }}</section>
</template>

<script>
import { isAuth, user } from "../useSharedState";

export default {
  name: "UserPanelStatus",
  setup() {
    return { isAuth, user };
  },
  computed: {
    authTextStatus() {
      return this.isAuth ? "Zalogowany" : "Wylogowany";
    },
  },
};
</script>

<style scoped></style>
