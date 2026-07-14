<template>
  <v-expansion-panel id="component-progressspinner" value="component-progressspinner">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>ProgressSpinner</span>
        <span class="text-medium-emphasis">→</span>
        <span>VProgressCircular</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvProgressSpinner />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <ProgressSpinner />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    ProgressSpinner as PvProgressSpinner,
  } from 'primevue'
</script>
