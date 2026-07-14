<template>
  <v-expansion-panel id="component-listbox" value="component-listbox">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Listbox</span>
        <span class="text-medium-emphasis">→</span>
        <span>VList</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvListbox v-model="basicValue" :options="basicOptions" />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <Listbox :items="basicOptions" />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Listbox as PvListbox,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string | null>(null)
  const basicOptions = ['Apple', 'Banana', 'Cherry']
</script>
