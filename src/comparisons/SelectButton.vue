<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvSelectButton v-model="basicValue" :options="basicOptions" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

      <SelectButton v-model="basicValue">
        <Button v-for="option in basicOptions" :key="option" :text="option" :value="option" />
      </SelectButton>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    SelectButton as PvSelectButton,
  } from 'primevue'
  import { ref } from 'vue'
  import { VBtn, VBtnToggle } from 'vuetify/components'

  function aura<T> (component: T, name: string): T {
    return { ...(component as Record<string, unknown>), name, aliasName: (component as { name?: string }).name } as T
  }

  const Button = aura(VBtn, 'Button')
  const SelectButton = aura(VBtnToggle, 'SelectButton')

  const basicValue = ref<string | null>(null)
  const basicOptions = ['Apple', 'Banana', 'Cherry']
</script>
