<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvTimeline :value="basicTimeline">
        <template #content="{ item }">{{ item.status }}
        </template>
      </PvTimeline>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

      <Timeline>
        <v-timeline-item>Step</v-timeline-item>
      </Timeline>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Timeline as PvTimeline,
  } from 'primevue'

  const basicTimeline = [{ status: 'Step' }]
</script>
