<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvMeterGroup :value="[{ label: 'Used', value: 15 }]" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <MeterGroup :model-value="15" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    MeterGroup as PvMeterGroup,
  } from 'primevue'
</script>
