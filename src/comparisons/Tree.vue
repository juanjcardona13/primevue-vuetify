<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvTree :value="basicTree" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Tree :items="vuetifyTree" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Tree as PvTree,
  } from 'primevue'

  const basicTree = [{ key: '0', label: 'Root', children: [{ key: '0-0', label: 'Child' }] }]
  const vuetifyTree = [{ id: 0, title: 'Root', children: [{ id: 1, title: 'Child' }] }]
</script>
