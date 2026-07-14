<template>
  <v-expansion-panel id="component-radiobutton" value="component-radiobutton">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>RadioButton</span>
        <span class="text-medium-emphasis">→</span>
        <span>VRadio</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvRadioButtonGroup v-model="basicValue">
            <PvRadioButton value="a" />
          </PvRadioButtonGroup>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

          <RadioButtonGroup v-model="basicValue">
            <RadioButton value="a" />
          </RadioButtonGroup>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    RadioButton as PvRadioButton,
    RadioButtonGroup as PvRadioButtonGroup,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string | null>(null)
</script>
