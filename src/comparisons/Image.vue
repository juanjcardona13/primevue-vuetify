<template>
  <v-expansion-panel id="component-image" value="component-image">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Image</span>
        <span class="text-medium-emphasis">→</span>
        <span>VImg</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvImage alt="Image" src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" :width="120" />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <Image alt="Image" src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" :width="120" />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Image as PvImage,
  } from 'primevue'
</script>
