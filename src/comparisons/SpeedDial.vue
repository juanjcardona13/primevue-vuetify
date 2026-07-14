<template>
  <v-expansion-panel id="component-speeddial" value="component-speeddial">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>SpeedDial</span>
        <span class="text-medium-emphasis">→</span>
        <span>VSpeedDial</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvSpeedDial :model="[{ icon: 'pi pi-pencil' }]" />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

          <SpeedDial>
            <template #activator="{ props }">
              <v-fab v-bind="props" icon="prime:plus" />
            </template>

            <v-btn icon="prime:pencil" />
          </SpeedDial>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    SpeedDial as PvSpeedDial,
  } from 'primevue'
</script>
