<template>
  <v-expansion-panel id="component-dialog" value="component-dialog">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>Dialog</span>
        <span class="text-medium-emphasis">→</span>
        <span>VDialog</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <div class="d-flex flex-wrap ga-4">
        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
          <PvButton label="Show" @click="dialogVisible = true" />
          <PvDialog v-model:visible="dialogVisible" header="Dialog" modal>Content</PvDialog>
        </v-sheet>

        <v-sheet border class="pa-4 compare-column" rounded="lg">
          <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

          <Dialog>
            <template #activator="{ props }">
              <Button v-bind="props" text="Show" />
            </template>

            <Card title="Dialog" />
          </Dialog>
        </v-sheet>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
  import {
    Button as PvButton,
    Dialog as PvDialog,
  } from 'primevue'
  import { ref } from 'vue'

  const dialogVisible = ref(false)
</script>
