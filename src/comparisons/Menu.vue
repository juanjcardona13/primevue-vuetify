<template>
  <v-expansion-panel id="component-menu" value="component-menu">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Menu</span>
        <span class="text-medium-emphasis">→</span>
        <span>VMenu</span>
        <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
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
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Menu as PvMenu,
  } from 'primevue'

  const basicItems = [{ label: 'Item' }, { label: 'Item 2' }]
  const menuItems = [{ title: 'Apple', value: 0 }, { title: 'Banana', value: 1 }, { title: 'Cherry', value: 2 }]
</script>
