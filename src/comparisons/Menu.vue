<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvMenu :model="basicItems" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

      <Menu>
        <template #activator="{ props }">
          <Button v-bind="props" text="Open" />

        </template>

        <v-list :items="menuItems" />
      </Menu>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Menu as PvMenu,
  } from 'primevue'

  const basicItems = [{ label: 'Item' }, { label: 'Item 2' }]
  const menuItems = [{ title: 'Apple', value: 0 }, { title: 'Banana', value: 1 }, { title: 'Cherry', value: 2 }]
</script>
