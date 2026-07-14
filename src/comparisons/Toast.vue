<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
      <PvButton label="Show" @click="showPvToast" />
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
      <Button text="Show" @click="toasts = [{ title: 'Info', text: 'Message', timeout: 3000 }]" />
    </v-sheet>
  </div>

  <Toast v-model="toasts" />
</template>

<script lang="ts" setup>
  import {
    Button as PvButton,
  } from 'primevue'
  import { useToast } from 'primevue/usetoast'
  import { ref } from 'vue'
  import { VBtn, VSnackbarQueue } from 'vuetify/components'

  function aura<T> (component: T, name: string): T {
    return { ...(component as Record<string, unknown>), name, aliasName: (component as { name?: string }).name } as T
  }

  const Button = aura(VBtn, 'Button')
  const Toast = aura(VSnackbarQueue, 'Toast')

  const toasts = ref<any[]>([])
  const toast = useToast()

  function showPvToast () {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message', life: 3000 })
  }
</script>
