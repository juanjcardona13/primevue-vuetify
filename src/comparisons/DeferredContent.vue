<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvDeferredContent>
        <div>Deferred content</div>
      </PvDeferredContent>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

      <DeferredContent>
        <div>Deferred content</div>
      </DeferredContent>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    DeferredContent as PvDeferredContent,
  } from 'primevue'
</script>
