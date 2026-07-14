<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvPanelMenu :model="basicItems" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <PanelMenu :items="[{ title: 'Item', value: 0 }]" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    PanelMenu as PvPanelMenu,
  } from 'primevue'

  const basicItems = [{ label: 'Item' }, { label: 'Item 2' }]
</script>
