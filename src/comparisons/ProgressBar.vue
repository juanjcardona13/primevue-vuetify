<template>
  <v-expansion-panel id="component-progressbar" value="component-progressbar">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>ProgressBar</span>
        <span class="text-medium-emphasis">→</span>
        <span>VProgressLinear</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvProgressBar :value="50" />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <ProgressBar :model-value="50" />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    ProgressBar as PvProgressBar,
  } from 'primevue'
</script>
