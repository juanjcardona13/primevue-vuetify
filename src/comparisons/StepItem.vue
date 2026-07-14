<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvStepper value="1">
        <PvStepItem value="1">
          <PvStep>Step</PvStep>
          <PvStepPanel>Content</PvStepPanel>
        </PvStepItem>
      </PvStepper>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Stepper :items="['Step']" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Step as PvStep,
    StepItem as PvStepItem,
    StepPanel as PvStepPanel,
    Stepper as PvStepper,
  } from 'primevue'
</script>
