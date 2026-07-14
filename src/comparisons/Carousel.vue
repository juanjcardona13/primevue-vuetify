<template>
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
</template>

<script lang="ts" setup>
  import {
    Carousel as PvCarousel,
  } from 'primevue'

  const basicSlides = [{ title: 'Slide', bg: '#eff6ff' }]
</script>
