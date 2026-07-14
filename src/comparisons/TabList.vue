<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvTabs value="0">
        <PvTabList>
          <PvTab value="0">Tab</PvTab>
        </PvTabList>

        <PvTabPanels>
          <PvTabPanel value="0">Content</PvTabPanel>
        </PvTabPanels>
      </PvTabs>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <v-alert density="compact" type="info">No Vuetify equivalent defined yet.</v-alert>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Tab as PvTab,
    TabList as PvTabList,
    TabPanel as PvTabPanel,
    TabPanels as PvTabPanels,
    Tabs as PvTabs,
  } from 'primevue'
</script>
