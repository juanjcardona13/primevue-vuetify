<template>
  <v-expansion-panel id="component-drawer" value="component-drawer">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Drawer</span>
        <span class="text-medium-emphasis">→</span>
        <span>VNavigationDrawer</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
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
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Button as PvButton,
    Drawer as PvDrawer,
  } from 'primevue'
  import { ref } from 'vue'

  const drawerVisible = ref(false)
</script>
