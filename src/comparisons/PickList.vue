<template>
  <v-expansion-panel id="component-picklist" value="component-picklist">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>PickList</span>
        <span class="text-medium-emphasis">→</span>
        <span>—</span>
        <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvPickList v-model="pickListValue" data-key="label">
            <template #option="{ option }">{{ option.label }}</template>
          </PvPickList>
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
    PickList as PvPickList,
  } from 'primevue'
  import { ref } from 'vue'

  const pickListValue = ref([[{ label: 'Item' }], [{ label: 'Item 2' }]])
</script>
