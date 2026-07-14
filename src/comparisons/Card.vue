<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvCard>
        <template #title>Card
        </template>

        <template #content>Content</template>
      </PvCard>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Card text="Content" title="Card" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Card as PvCard,
  } from 'primevue'
</script>
