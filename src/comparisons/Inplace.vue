<template>
  <v-expansion-panel id="component-inplace" value="component-inplace">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Inplace</span>
        <span class="text-medium-emphasis">→</span>
        <span>—</span>
        <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvInplace>
            <template #display>View content</template>
            <template #content>Editable content</template>
          </PvInplace>
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
    Inplace as PvInplace,
  } from 'primevue'
</script>
