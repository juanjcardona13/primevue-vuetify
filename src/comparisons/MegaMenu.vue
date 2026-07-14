<template>
  <v-expansion-panel id="component-megamenu" value="component-megamenu">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>MegaMenu</span>
        <span class="text-medium-emphasis">→</span>
        <span>—</span>
        <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvMegaMenu :model="basicItems" />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <v-alert density="compact" type="info">No Vuetify equivalent defined yet.</v-alert>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    MegaMenu as PvMegaMenu,
  } from 'primevue'

  const basicItems = [{ label: 'Item' }, { label: 'Item 2' }]
</script>
