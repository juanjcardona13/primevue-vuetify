<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvPaginator :rows="10" :total-records="50" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Paginator :length="5" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Paginator as PvPaginator,
  } from 'primevue'
</script>
