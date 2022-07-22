<script setup>
import ComponentEmittingAnEvent from '@/components/ComponentEmittingAnEvent.vue'
import ComponentWithEvent from '@/components/ComponentWithEvent.vue'
import ComponentWithFormInput from '@/components/ComponentWithFormInput.vue'
import ComponentWithFormInputVeeValidate from '@/components/ComponentWithFormInputVeeValidate.vue'
import ComponentWithoutProps from '@/components/ComponentWithoutProps.vue'
import ComponentWithProps from '@/components/ComponentWithProps.vue'
import ComponentConnectedToStore from '@/components/ComponentConnectedToStore.vue'
import InfoPresenter from '@/components/InfoPresenter.vue'
import ItemRating from '@/task-for-day-4/ItemRating.vue'
</script>

<template>
  <h2>Prezentacja komponentów:</h2>
  <InfoPresenter explain="Komponent bez props">
    <ComponentWithoutProps />
  </InfoPresenter>
  <InfoPresenter explain="Komponent z domyślnymi props...">
    <ComponentWithProps />
  </InfoPresenter>
  <InfoPresenter explain="Komponent z eventem @click w środku">
    <ComponentWithEvent />
  </InfoPresenter>
  <InfoPresenter explain="Komponent emitujący event @addToCart">
    <ComponentEmittingAnEvent />
  </InfoPresenter>
  <InfoPresenter
    explain="Komponent połączony ze stanem globalnym useCounterStore"
  >
    <ComponentConnectedToStore />
  </InfoPresenter>
  <InfoPresenter explain="Komponent z inputem">
    <ComponentWithFormInput />
  </InfoPresenter>
  <InfoPresenter explain="Komponent z inputem + vee-validate">
    <ComponentWithFormInputVeeValidate />
  </InfoPresenter>
  <InfoPresenter explain="Twoje zadanie do przetestowania">
    <ItemRating :startRating="10" />
  </InfoPresenter>
</template>
