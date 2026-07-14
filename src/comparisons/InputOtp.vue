<template>
  <v-expansion-panel id="component-inputotp" value="component-inputotp">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>InputOtp</span>
        <span class="text-medium-emphasis">→</span>
        <span>VOtpInput</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvInputOtp />
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
          <InputOtp />
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    InputOtp as PvInputOtp,
  } from 'primevue'
</script>
