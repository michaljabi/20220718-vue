<template>
  <div>
    <h1>9. Options API - starsza alternatywa</h1>
    <section class="explanation">
      Pomimo tego, że podejście <strong>Options API</strong> w Vue.js jest
      starsze i znane już od początków Vue, nie oznacza to - że nie może być
      wykorzystywane przy pisaniu aplikacji.
      <p>
        <strong>Composition API</strong> jest nowszą i bardziej "elastyczną"
        formą pisania, gdzie możemy skorzystać z "reużywalnego" kodu dla logiki
        działania komponentów. Opłaca się go użyć jeśli piszemy aplikację od
        nowa i będzie w całości obsługiwana np. przez <code>.vue</code> SFC
        (Single File Components)
      </p>
      <p>
        <strong>Options API</strong> pozostaje i może się okazać wygodniejsze w
        momencie "wpinania" Vue do części działającej już aplikacji
        front-end'owej (np. nie używającej żadnego framework'a).
      </p>
    </section>
    <section
      @click="handleSectionClick"
      :class="{ explanation: hasExplanation }"
    >
      Ten przykład pokazuje użycie elementów Vue w postaci:
      <strong>{{ wayOfWork }}</strong
      >.
      <p>
        Docelowo powinniśmy nie miksować podejść, i pisać aplikację w jednym ze
        sposobów - jednak przykłady z <strong>Options API</strong> mamy tu
        pokazane w celach pokazowych (naukowych). {{ exclamation }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "OptionsApiSite",
  data() {
    return {
      hasExplanation: true,
      exclamation: "",
    };
  },
  computed: {
    wayOfWork() {
      return "Options API";
    },
  },
  methods: {
    handleSectionClick() {
      this.hasExplanation = !this.hasExplanation;
    },
  },
  mounted() {
    console.log("I'm mounted... ");
    this.timer = setTimeout(() => {
      this.hasExplanation = false;
    }, 4000);
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
  watch: {
    hasExplanation(newValue) {
      if (newValue === false) {
        this.exclamation = "❗❗❗";
      }
    },
  },
};
</script>

<style scoped></style>
