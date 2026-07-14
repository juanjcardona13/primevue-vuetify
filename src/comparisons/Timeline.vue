<template>
  <v-expansion-panel id="component-timeline" value="component-timeline">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Timeline</span>
        <span class="text-medium-emphasis">→</span>
        <span>VTimeline</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvTimeline :value="basicTimeline">
            <template #content="{ item }">{{ item.status }}</template>
          </PvTimeline>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

          <Timeline>
            <v-timeline-item>Step</v-timeline-item>
          </Timeline>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Timeline as PvTimeline,
  } from 'primevue'

  const basicTimeline = [{ status: 'Step' }]
</script>
