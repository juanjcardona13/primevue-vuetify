<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvAutoComplete />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <AutoComplete />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    AutoComplete as PvAutoComplete,
  } from 'primevue'
</script>
