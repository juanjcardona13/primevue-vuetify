<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvInputGroup>
        <PvInputGroupAddon>$</PvInputGroupAddon>
        <PvInputText />
      </PvInputGroup>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <v-alert density="compact" type="info">No Vuetify equivalent defined yet.</v-alert>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    InputGroup as PvInputGroup,
    InputGroupAddon as PvInputGroupAddon,
    InputText as PvInputText,
  } from 'primevue'
</script>
