<template>
  <v-expansion-panel id="component-dataview" value="component-dataview">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>DataView</span>
        <span class="text-medium-emphasis">→</span>
        <span>VDataIterator</span>
        <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvDataView :value="basicTableData">
            <template #list="{ items }">
              <div v-for="item in items" :key="item.name">{{ item.name }}</div>
            </template>
          </PvDataView>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

          <DataView :items="basicTableData">
            <template #default="{ items }">
              <div v-for="item in items" :key="item.raw.name">{{ item.raw.name }}</div>
            </template>
          </DataView>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    DataView as PvDataView,
  } from 'primevue'

  const basicTableData = [{ name: 'Item' }]
</script>
