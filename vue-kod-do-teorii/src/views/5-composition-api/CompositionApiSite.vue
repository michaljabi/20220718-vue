<template>
  <div>
    <h1>5. Composition / Reactive API - logika współdzielona</h1>
    <section style="background-color: #e8d592; padding: 0.15em">
      <h4>Uwaga:</h4>
      <pre>
        Cały ten przykład został przygotowany w oparciu o metody {{
          methodName
        }}, na komponentach, aby pokazać alternatywę dla (wygodniejszego) podejścia:

        &lt;script setup&gt;
      </pre>
    </section>
    <section class="explanation">
      <p>
        W 3 wersji Vue używanie
        <RouterLink to="/mixins">Mixin's</RouterLink> nie jest konieczne, z
        uwagi na istnienie, bardziej <i>"poukładanych"</i> koncepcji
        <strong>Composition API</strong> oraz <strong>Reactive API</strong>
      </p>
      <p>
        Inspiracja i główna "mechanika działania" dla
        <strong>Composition API</strong> została zaczerpnięta z
        <i>"React Hooks"</i>. Jej główne zadanie to wyciągnięcie części logiki
        komponentu - poza ten komponent, robiąc z niej logikę współdzieloną.
        Dodatkowo - możemy przygotować tę logikę w taki sposób aby również dało
        się współdzielić stan.
      </p>
    </section>
    <h3 style="margin-top: 2em">
      #1 Przykład: działanie 1:1 takie jak w
      <RouterLink to="/mixins">Mixins</RouterLink>
    </h3>
    <section class="d-flex">
      <SkywalkerName />
      <SkywalkerGender style="margin-left: 20px" />
    </section>
    <hr />
    <h3 style="margin-top: 5em">
      #2 Inny przykład: współdzielony stan dzięki Composition API
    </h3>
    <section class="d-flex">
      <UserPanelControls />
      <UserPanelStatus />
    </section>
  </div>
</template>

<script>
import SkywalkerName from "./components/SkywalkerName.vue";
import SkywalkerGender from "./components/SkywalkerGender.vue";

import UserPanelControls from "./components/UserPanelControls.vue";
import UserPanelStatus from "./components/UserPanelStatus.vue";

export default {
  name: "CompositionApiSite",
  components: {
    UserPanelControls,
    UserPanelStatus,
    SkywalkerGender,
    SkywalkerName,
  },
  setup() {
    return { methodName: "setup()" };
  },
};
</script>
