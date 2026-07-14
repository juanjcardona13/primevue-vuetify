<template>
  <v-expansion-panel id="component-carousel" value="component-carousel">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Carousel</span>
        <span class="text-medium-emphasis">→</span>
        <span>VCarousel</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

          <PvCarousel :num-scroll="1" :num-visible="1" :value="basicSlides">
            <template #item="{ data }">
              <div :style="{ background: data.bg, height: '120px' }">{{ data.title }}</div>
            </template>
          </PvCarousel>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

          <Carousel>
            <v-carousel-item>
              <v-sheet class="d-flex align-center justify-center" color="surface-variant" :height="120">Slide</v-sheet>
            </v-carousel-item>
          </Carousel>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Carousel as PvCarousel,
  } from 'primevue'

  const basicSlides = [{ title: 'Slide', bg: '#eff6ff' }]
</script>
