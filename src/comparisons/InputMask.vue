<template>
  <v-expansion-panel id="component-inputmask" value="component-inputmask">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>InputMask</span>
        <span class="text-medium-emphasis">→</span>
        <span>VMaskInput</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvInputMask mask="99-999999" />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <InputMask mask="##-######" />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    InputMask as PvInputMask,
  } from 'primevue'
</script>
