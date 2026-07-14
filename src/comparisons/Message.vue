<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvMessage>Message</PvMessage>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Message>Message</Message>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Message as PvMessage,
  } from 'primevue'
</script>
