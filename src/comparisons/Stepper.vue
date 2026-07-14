<template>
  <v-expansion-panel id="component-stepper" value="component-stepper">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Stepper</span>
        <span class="text-medium-emphasis">→</span>
        <span>VStepper</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvStepper value="1">
            <PvStepList>
              <PvStep value="1">Step</PvStep>
            </PvStepList>

            <PvStepPanels>
              <PvStepPanel value="1">Content</PvStepPanel>
            </PvStepPanels>
          </PvStepper>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <Stepper :items="['Step']" />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Step as PvStep,
    StepList as PvStepList,
    StepPanel as PvStepPanel,
    StepPanels as PvStepPanels,
    Stepper as PvStepper,
  } from 'primevue'
</script>
