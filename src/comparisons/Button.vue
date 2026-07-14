<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvButton>Button</PvButton>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Button text="Button" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Button as PvButton,
  } from 'primevue'
  import { VBtn } from 'vuetify/components'

  function aura<T> (component: T, name: string): T {
    return { ...(component as Record<string, unknown>), name, aliasName: (component as { name?: string }).name } as T
  }

  const Button = aura(VBtn, 'Button')

</script>
