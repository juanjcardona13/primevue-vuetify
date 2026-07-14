<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvSelect v-model="basicValue" :options="basicOptions" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Select v-model="basicValue" :items="basicOptions" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Select as PvSelect,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string | null>(null)
  const basicOptions = ['Apple', 'Banana', 'Cherry']
</script>
