<template>
  <v-expansion-panel id="component-selectbutton" value="component-selectbutton">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>SelectButton</span>
        <span class="text-medium-emphasis">→</span>
        <span>VBtnToggle</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
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
    </v-expansion-panel-text>
  </v-expansion-panel>
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
