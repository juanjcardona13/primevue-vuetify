<template>
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
</template>

<script lang="ts" setup>
  import {
    Image as PvImage,
  } from 'primevue'
</script>
