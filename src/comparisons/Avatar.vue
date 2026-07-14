<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvAvatar label="P" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Avatar text="V" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Avatar as PvAvatar,
  } from 'primevue'
</script>
