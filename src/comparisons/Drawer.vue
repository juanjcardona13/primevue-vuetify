<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvButton icon="pi pi-arrow-right" @click="drawerVisible = true" />
      <PvDrawer v-model:visible="drawerVisible">Content</PvDrawer>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Button icon="prime:arrow-right" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Button as PvButton,
    Drawer as PvDrawer,
  } from 'primevue'
  import { ref } from 'vue'

  const drawerVisible = ref(false)
</script>
