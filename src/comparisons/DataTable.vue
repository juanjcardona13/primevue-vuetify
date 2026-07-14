<template>
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
</template>

<script lang="ts" setup>
  import {
    Column as PvColumn,
    DataTable as PvDataTable,
  } from 'primevue'

  const basicTableData = [{ name: 'Item' }]
</script>
