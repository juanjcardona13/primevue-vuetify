<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvMultiSelect v-model="basicValue" :options="basicOptions" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <MultiSelect v-model="basicValue" :items="basicOptions" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    MultiSelect as PvMultiSelect,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string[]>([])
  const basicOptions = ['Apple', 'Banana', 'Cherry']
</script>
