<template>
  <div>
    <h1>4. Zapytania Ajax</h1>
    <div v-if="loading">Loading...</div>
    <article v-else>
      <header>
        <h4>{{ person.name }}</h4>
        <span>{{ person.birthYear }}</span>
      </header>
      <div>
        {{ genderSign(person.gender) }}
        <div>height: {{ person.height }}</div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { starWarsApi } from "@/services/starWarsApi";

import { onMounted, ref } from "vue";

const loading = ref(true);
const person = ref({});

onMounted(() => {
  starWarsApi
    .getPeople(1)
    .then((response) => response.data)
    .then((data) => {
      loading.value = false;
      const { name, height, birth_year, gender } = data;
      person.value = {
        name,
        height,
        birthYear: birth_year,
        gender,
      };
    });
});

function genderSign(gender) {
  if (!gender) {
    return "";
  }
  switch (gender) {
    case "male":
      return "😀";
    case "female":
      return "👩";
    case "n/a":
      return "❌";
    default:
      return "👽";
  }
}

/*
  // Alternatywnie [Options API]

export default {
  name: 'AjaxCallSite',
  data() {
    return {
      loading: true,
      person: {},
    };
  },
  mounted() {
    starWarsApi
      .getPeople(1)
      .then((response) => response.data)
      .then((data) => {
        this.loading = false;
        const {name, height, birth_year, gender} = data;
        this.person = {
          name,
          height,
          birthYear: birth_year,
          gender,
        };
      });
  },
  methods: {
    genderSign(gender) {
      if (!gender) {
        return '';
      }
      switch (gender) {
        case 'male':
          return '😀';
        case 'female':
          return '👩';
        case 'n/a':
          return '❌';
        default:
          return '👽';
      }
    },
  },
};

 */
</script>

<style scoped>
h4 {
  margin-bottom: 8px;
}
</style>
