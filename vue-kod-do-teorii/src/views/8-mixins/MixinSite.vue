<template>
  <div>
    <h1>8. Mixin'y - logika współdzielona</h1>
    <section
      style="background-color: #e8d592; padding: 0.15em; margin-bottom: 1em"
    >
      <h4>Uwaga:</h4>
      <pre>
        Cały ten przykład został przygotowany w oparciu o Options API na komponentach.
        W Composition API - nie mamy potrzeby korzystać z (toporniejszego i mniej odpornego na błędy) podejścia Mixins
        Przechodzimy na użycie własnych `useSomething` - kompozycji.
      </pre>
    </section>
    <section class="d-flex">
      <SkywalkerName />
      <SkywalkerGender style="margin-left: 20px" />
    </section>
  </div>
</template>

<script>
import SkywalkerName from "./components/SkywalkerName.vue";
import SkywalkerGender from "./components/SkywalkerGender.vue";

export default {
  name: "MixinSite",
  components: { SkywalkerGender, SkywalkerName },
};
</script>

<style scoped></style>
