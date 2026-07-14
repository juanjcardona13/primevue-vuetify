<template>
  <v-expansion-panel id="component-fileupload" value="component-fileupload">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>FileUpload</span>
        <span class="text-medium-emphasis">→</span>
        <span>VFileUpload</span>
        <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvFileUpload mode="basic" />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <FileUpload />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    FileUpload as PvFileUpload,
  } from 'primevue'
</script>
