<template>
  <v-expansion-panel id="component-datatable" value="component-datatable">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>DataTable</span>
        <span class="text-medium-emphasis">→</span>
        <span>VDataTable</span>
        <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvDataTable :value="basicTableData">
            <PvColumn field="name" header="Name" />
          </PvDataTable>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <DataTable :headers="[{ title: 'Name', key: 'name' }]" :items="basicTableData" />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Column as PvColumn,
    DataTable as PvDataTable,
  } from 'primevue'

  const basicTableData = [{ name: 'Item' }]
</script>
