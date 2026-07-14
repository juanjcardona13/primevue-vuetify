<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvTreeSelect v-model="basicValue" :options="basicTree" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <v-alert density="compact" type="info">No Vuetify equivalent defined yet.</v-alert>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    TreeSelect as PvTreeSelect,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string | null>(null)
  const basicTree = [{ key: '0', label: 'Root', children: [{ key: '0-0', label: 'Child' }] }]
</script>
