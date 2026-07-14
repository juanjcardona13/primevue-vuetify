<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvSplitter style="height: 120px">
        <PvSplitterPanel>Left</PvSplitterPanel>
        <PvSplitterPanel>Right</PvSplitterPanel>
      </PvSplitter>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <v-alert density="compact" type="info">No Vuetify equivalent defined yet.</v-alert>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Splitter as PvSplitter,
    SplitterPanel as PvSplitterPanel,
  } from 'primevue'
</script>
