<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvFloatLabel>
        <PvInputText id="float-demo" v-model="basicValue" />
        <label for="float-demo">Label</label>
      </PvFloatLabel>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <v-alert density="compact" type="info">No Vuetify equivalent defined yet.</v-alert>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    FloatLabel as PvFloatLabel,
    InputText as PvInputText,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string | null>(null)
</script>
