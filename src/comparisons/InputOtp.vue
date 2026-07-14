<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvInputOtp />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <InputOtp />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    InputOtp as PvInputOtp,
  } from 'primevue'
</script>
