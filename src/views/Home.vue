<template>
  <div>
    <header class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-2">
        PrimeVue Aura Blueprint for Vuetify
      </h1>

      <p class="text-body-1 text-medium-emphasis mb-4">
        Compare PrimeVue Aura components with their Vuetify blueprint equivalents.
      </p>

      <div class="d-flex flex-wrap ga-2">
        <span class="text-caption text-medium-emphasis align-self-center me-1">What to copy:</span>
        <v-chip size="small" variant="outlined">src/plugins/vuetify.ts</v-chip>
        <v-chip size="small" variant="outlined">src/styles</v-chip>
        <v-chip size="small" variant="outlined">font</v-chip>
        <v-chip size="small" variant="outlined">icons</v-chip>
      </div>
    </header>

    <v-row class="mb-8">
      <v-col cols="12" sm="4">
        <v-card border class="pa-4" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-1">Ready</div>
          <div class="text-h5 font-weight-bold">{{ statusCounts.ready }}</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card border class="pa-4" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-1">In progress</div>
          <div class="text-h5 font-weight-bold">{{ statusCounts.todo }}</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card border class="pa-4" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-1">No equivalent</div>
          <div class="text-h5 font-weight-bold">{{ statusCounts.missing }}</div>
        </v-card>
      </v-col>
    </v-row>

    <section>
      <h2 class="text-h6 font-weight-semibold mb-4">Component catalog</h2>

      <v-row dense>
        <v-col
          v-for="mapping in componentMappings"
          :key="mapping.slug"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            border
            class="pa-3 catalog-card"
            role="button"
            rounded="lg"
            tabindex="0"
            @click="emit('select', mapping.slug)"
            @keydown.enter="emit('select', mapping.slug)"
          >
            <div class="d-flex align-center justify-space-between ga-2 mb-1">
              <span class="text-body-2 font-weight-medium">{{ mapping.primevue }}</span>

              <v-chip :color="getStatusColor(mapping.status)" size="x-small" variant="flat">
                {{ getStatusLabel(mapping.status) }}
              </v-chip>
            </div>

            <div class="text-caption text-medium-emphasis">
              {{ mapping.vuetify ?? 'No Vuetify equivalent' }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import {
    componentMappings,
    getStatusColor,
    getStatusLabel,
    statusCounts,
  } from '@/catalog'

  const emit = defineEmits<{
    select: [slug: string]
  }>()
</script>

<style scoped>
  .catalog-card {
    cursor: pointer;
    transition: box-shadow 0.15s ease;
  }

  .catalog-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
</style>
