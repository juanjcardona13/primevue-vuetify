<template>
  <v-expansion-panel id="component-virtualscroller" value="component-virtualscroller">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>VirtualScroller</span>
        <span class="text-medium-emphasis">→</span>
        <span>VVirtualScroll</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvVirtualScroller :item-size="32" :items="basicOptions" style="height: 120px">
            <template #item="{ item }">
              <div>{{ item }}</div>
            </template>
          </PvVirtualScroller>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

          <VirtualScroller :height="120" :items="basicOptions">
            <template #default="{ item }">
              <div>{{ item }}</div>
            </template>
          </VirtualScroller>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    VirtualScroller as PvVirtualScroller,
  } from 'primevue'

  const basicOptions = ['Apple', 'Banana', 'Cherry']
</script>
