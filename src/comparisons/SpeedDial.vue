<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvSpeedDial :model="[{ icon: 'pi pi-pencil' }]" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

      <SpeedDial>
        <template #activator="{ props }">
          <v-fab v-bind="props" icon="prime:plus" />

        </template>

        <v-btn icon="prime:pencil" />
      </SpeedDial>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    SpeedDial as PvSpeedDial,
  } from 'primevue'
</script>
