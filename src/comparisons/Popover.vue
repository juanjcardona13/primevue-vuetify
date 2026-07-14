<template>
  <v-expansion-panel id="component-popover" value="component-popover">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Popover</span>
        <span class="text-medium-emphasis">→</span>
        <span>VMenu</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvButton icon="pi pi-share-alt" label="Share" @click="togglePopover" />
          <PvPopover ref="popoverRef">Content</PvPopover>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

          <Popover>
            <template #activator="{ props }">
              <Button v-bind="props" prepend-icon="prime:share-alt" text="Share" />
            </template>

            <Card text="Content" />
          </Popover>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Button as PvButton,
    Popover as PvPopover,
  } from 'primevue'
  import { ref } from 'vue'

  const popoverRef = ref()

  function togglePopover (event: Event) {
    popoverRef.value?.toggle(event)
  }
</script>
