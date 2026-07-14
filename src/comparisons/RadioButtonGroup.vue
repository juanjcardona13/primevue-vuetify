<template>
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
</template>

<script lang="ts" setup>
  import {
    RadioButton as PvRadioButton,
    RadioButtonGroup as PvRadioButtonGroup,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string | null>(null)
</script>
