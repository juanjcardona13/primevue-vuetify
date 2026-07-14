<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvIftaLabel>
        <PvInputText id="ifta-demo" v-model="basicValue" />
        <label for="ifta-demo">Label</label>
      </PvIftaLabel>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <v-alert density="compact" type="info">No Vuetify equivalent defined yet.</v-alert>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    IftaLabel as PvIftaLabel,
    InputText as PvInputText,
  } from 'primevue'
  import { ref } from 'vue'

  const basicValue = ref<string | null>(null)
</script>
