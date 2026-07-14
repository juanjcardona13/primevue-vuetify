<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvConfirmDialog />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <ConfirmDialog v-model="basicValue" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    ConfirmDialog as PvConfirmDialog,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string | null>(null)
</script>
