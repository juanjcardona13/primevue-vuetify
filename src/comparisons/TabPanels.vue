<template>
  <v-expansion-panel id="component-tabpanels" value="component-tabpanels">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>TabPanels</span>
        <span class="text-medium-emphasis">→</span>
        <span>VTabsWindow</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
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

          <Tabs v-model="tab">
            <Tab value="0">Tab</Tab>
          </Tabs>

          <TabPanels v-model="tab">
            <TabPanel value="0">Content</TabPanel>
          </TabPanels>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Tab as PvTab,
    TabList as PvTabList,
    TabPanel as PvTabPanel,
    TabPanels as PvTabPanels,
    Tabs as PvTabs,
  } from 'primevue'
  import { ref } from 'vue'
  import { VTab, VTabs, VTabsWindow, VTabsWindowItem } from 'vuetify/components'

  function aura<T> (component: T, name: string): T {
    return { ...(component as Record<string, unknown>), name, aliasName: (component as { name?: string }).name } as T
  }

  const Tabs = aura(VTabs, 'Tabs')
  const Tab = aura(VTab, 'Tab')
  const TabPanels = aura(VTabsWindow, 'TabPanels')
  const TabPanel = aura(VTabsWindowItem, 'TabPanel')

  const tab = ref('0')
</script>
