<template>
  <v-expansion-panel id="component-accordionpanel" value="component-accordionpanel">
    <v-expansion-panel-title>
      <div class="d-flex align-center flex-wrap ga-2">
        <span>AccordionPanel</span>
        <span class="text-medium-emphasis">→</span>
        <span>VExpansionPanel</span>
        <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
      </div>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
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
    </v-expansion-panel-text>
  </v-expansion-panel>
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
