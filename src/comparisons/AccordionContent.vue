<template>
  <div class="d-flex flex-wrap ga-4">
    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

      <PvAccordion>
        <PvAccordionPanel value="0">
          <PvAccordionHeader>Header</PvAccordionHeader>
          <PvAccordionContent>Content</PvAccordionContent>
        </PvAccordionPanel>
      </PvAccordion>
    </v-sheet>

    <v-sheet border class="pa-4 compare-column" rounded="lg">
      <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

      <Accordion>
        <AccordionPanel text="Content" title="Header" />
      </Accordion>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import {
    Accordion as PvAccordion,
    AccordionContent as PvAccordionContent,
    AccordionHeader as PvAccordionHeader,
    AccordionPanel as PvAccordionPanel,
  } from 'primevue'
  import { VExpansionPanel, VExpansionPanels } from 'vuetify/components'

  function aura<T> (component: T, name: string): T {
    return { ...(component as Record<string, unknown>), name, aliasName: (component as { name?: string }).name } as T
  }

  const Accordion = aura(VExpansionPanels, 'Accordion')
  const AccordionPanel = aura(VExpansionPanel, 'AccordionPanel')

</script>
