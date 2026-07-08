<template>
  <div style="display: flex; align-items: flex-start; gap: 32px;">
    <!-- ==================== PrimeVue ==================== -->
    <div style="padding: 16px; display: flex; flex-direction: column; gap: 16px; flex: 1;">
      <!--  width: 420px; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); border: 1px solid #e0e0e0; border-radius: 6px; margin: 40px;"> -->
      PrimeVue

      <!-- Toast -->
      <!-- <PvToast />
      <PvButton label="Show" @click="show()" /> -->

      <!-- Carousel -->
      <!-- <PvCarousel :value="carouselSlides" :num-visible="1" :num-scroll="1">
          <template #item="{ data }">
              <div
                  :style="{
                      background: data.bg,
                      height: '300px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                  }"
              >
                  {{ data.title }}
              </div>
          </template>
      </PvCarousel> -->

      <!-- Image -->
      <!-- <PvImage
          src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
          alt="Image"
          :width="250"
      /> -->

      <!-- Avatar -->
      <!-- <div style="display: flex; align-items: center; gap: 8px;">
          <PvAvatar label="P" />
          <PvAvatar icon="pi pi-user" />
          <PvAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
      </div> -->

      <!-- Badge -->
      <!-- <div style="display: flex; align-items: center; gap: 8px;">
          <PvBadge value="2" />
          <PvBadge>10</PvBadge>
      </div> -->

      <!-- Chip -->
      <!-- <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <PvChip label="Action" />
          <PvChip label="Comedy" />
          <PvChip label="Mystery" />
      </div> -->

      <!-- ProgressBar -->
      <!-- <PvProgressBar :value="50" /> -->

      <!-- ProgressSpinner -->
      <!-- <PvProgressSpinner /> -->

      <!-- MeterGroup -->
      <!-- <PvMeterGroup :value="meterValue" /> -->

      <!-- Skeleton -->
      <!-- <PvSkeleton /> -->

      <!-- Tag -->
      <div class="flex items-center gap-2">
        <PvTag value="Primary" />
        <PvTag severity="success" value="Success" />
        <PvTag severity="info" value="Info" />
        <PvTag severity="warn" value="Warn" />
        <PvTag severity="danger" value="Danger" />
      </div>

      <!-- Message -->
      <!-- <PvMessage>Message Content</PvMessage> -->

      <!-- PanelMenu -->
      <!-- <PvPanelMenu :model="items5" /> -->

      <!-- Menu -->
      <!-- <PvMenu :model="items4" /> -->

      <!-- Breadcrumb -->
      <!-- <PvBreadcrumb :home="home" :model="items4" /> -->

      <!-- FileUpload -->
      <!-- <PvFileUpload /> -->

      <!-- Popover -->
      <!-- <PvButton icon="pi pi-share-alt" label="Share" @click="toggle" />
      <PvPopover ref="op">
          a
      </PvPopover> -->

      <!-- Drawer -->
      <!-- <PvDrawer v-model:visible="visible">
          a
      </PvDrawer>
      <PvButton icon="pi pi-arrow-right" @click="visible = true" /> -->

      <!-- Dialog -->
      <!-- <PvButton label="Show" @click="visible = true" />
      <PvDialog v-model:visible="visible" /> -->

      <!-- Toolbar -->
      <!-- <PvToolbar>
          <template #start>
              a
          </template>

<template #center>
              b
          </template>

<template #end>
              c
          </template>
</PvToolbar> -->

      <!-- Tabs -->
      <!-- <PvTabs value="0">
          <PvTabList>
              <PvTab value="0">Header I</PvTab>
              <PvTab value="1">Header II</PvTab>
              <PvTab value="2">Header III</PvTab>
          </PvTabList>
          <PvTabPanels>
              <PvTabPanel value="0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia
                  deserunt mollit anim id est laborum.
              </PvTabPanel>
              <PvTabPanel value="1">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto
                  beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                  numquam eius modi.
              </PvTabPanel>
              <PvTabPanel value="2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                  non
                  provident, similique sunt in culpa
                  qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                  facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus.
              </PvTabPanel>
          </PvTabPanels>
      </PvTabs> -->

      <!-- Stepper -->
      <!-- <PvStepper value="1" class="basis-[50rem]">
          <PvStepList>
              <PvStep value="1">Header I</PvStep>
              <PvStep value="2">Header II</PvStep>
              <PvStep value="3">Header III</PvStep>
          </PvStepList>
          <PvStepPanels>
              <PvStepPanel value="1">
                  Content I
              </PvStepPanel>
              <PvStepPanel value="2">
                  Content II
              </PvStepPanel>
              <PvStepPanel value="3">
                  Content III
              </PvStepPanel>
          </PvStepPanels>
      </PvStepper> -->

      <!-- Divider -->
      <!-- <PvDivider /> -->

      <!-- Card -->
      <!-- <PvCard>
          <template #title>Simple Card</template>
<template #content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
              esse, cupiditate neque quas!
          </template>
</PvCard> -->

      <!-- Accordion -->
      <!-- <PvAccordion>
          <PvAccordionPanel value="0">
              <PvAccordionHeader>Header I</PvAccordionHeader>
              <PvAccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </PvAccordionContent>
          </PvAccordionPanel>
          <PvAccordionPanel value="1">
              <PvAccordionHeader>Header II</PvAccordionHeader>
              <PvAccordionContent>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  Consectetur, adipisci velit, sed quia non numquam eius modi.
              </PvAccordionContent>
          </PvAccordionPanel>
          <PvAccordionPanel value="2">
              <PvAccordionHeader>Header III</PvAccordionHeader>
              <PvAccordionContent>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa
                  qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                  facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus.
              </PvAccordionContent>
          </PvAccordionPanel>
      </PvAccordion> -->

      <!-- VirtualScroller -->
      <!-- <PvVirtualScroller
          :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']"
          :itemSize="17" style="height: 300px; width: 100%;">
          <template v-slot:item="{ item, options }">
              <div>
                  Item {{ item }}
              </div>
          </template>
</PvVirtualScroller> -->

      <!-- Tree -->
      <!-- <PvTree :value="nodes" /> -->

      <!-- Timeline -->
      <!-- <PvTimeline :value="events">
          <template #content="slotProps">
              {{ slotProps.item.status }}
          </template>
</PvTimeline> -->

      <!-- Paginator -->
      <!-- <PvPaginator :rows="10" :totalRecords="120" /> -->

      <!-- SpeedDial -->
      <!-- <PvSpeedDial :model="items2" /> -->

      <!-- Button -->
      <!-- <PvButton>Click me</PvButton> -->

      <!-- ToggleSwitch -->
      <!-- <PvToggleSwitch /> -->

      <!-- ToggleButton -->
      <!-- <PvToggleButton /> -->

      <!-- Textarea -->
      <!-- <PvTextarea /> -->

      <!-- Slider -->
      <!-- <PvSlider /> -->

      <!-- SelectButton -->
      <!-- <PvSelectButton :options="['Apple', 'Banana', 'Cherry', 'Date', 'Fig']" /> -->

      <!-- Select -->
      <!-- <PvSelect v-model="value" :options="suggestions" /> -->

      <!-- Rating -->
      <!-- <PvRating /> -->

      <!-- RadioButton -->
      <!-- <PvRadioButton /> -->

      <!-- Password -->
      <!-- <PvPassword /> -->

      <!-- MultiSelect -->
      <!-- <PvMultiSelect v-model="value" filter :options="suggestions" /> -->

      <!-- Listbox -->
      <!-- <PvListbox :options="suggestions" /> -->

      <!-- InputText -->
      <!-- <PvInputText /> -->

      <!-- InputOtp -->
      <!-- <PvInputOtp /> -->

      <!-- InputNumber -->
      <!-- <PvInputNumber /> -->

      <!-- InputMask -->
      <!-- <PvInputMask mask="99-999999" placeholder="99-999999" /> -->

      <!-- InputGroup -->
      <!-- <PvInputGroup>
          <PvInputGroupAddon>$</PvInputGroupAddon>
          <PvInputText />
          <PvInputGroupAddon>.00</PvInputGroupAddon>
      </PvInputGroup> -->

      <!-- DatePicker -->
      <!-- <PvDatePicker /> -->

      <!-- ColorPicker -->
      <!-- <PvColorPicker inline /> -->

      <!-- Checkbox -->
      <!-- <PvCheckbox /> -->

      <!-- CascadeSelect -->
      <!-- <PvCascadeSelect /> -->

      <!-- AutoComplete -->
      <!-- <PvAutoComplete v-model="value" :suggestions="items" placeholder="Search" @complete="search" />
      <PvAutoComplete v-model="value" :suggestions="items" placeholder="Search" @complete="search" dropdown /> -->
    </div>

    <!-- ==================== Vuetify ==================== -->
    <div class="pa-4 d-flex flex-column ga-4" style="flex: 1;">
      <!-- elevation-2 border rounded-md ma-10" style="width: 420px;"> -->
      Vuetify


      <!-- Message -->
      <!-- <Message>Message Content</Message> -->

      <!-- Toast -->
      <!-- <div class="d-flex flex-wrap ga-2">
        <v-btn text="Success" @click="showToast('success')" />
        <v-btn text="Info" @click="showToast('info')" />
        <v-btn text="Warn" @click="showToast('warning')" />
        <v-btn text="Error" @click="showToast('error')" />
        <v-btn text="Secondary" @click="showToast('secondary')" />
        <v-btn text="Contrast" @click="showToast('contrast')" />
      </div>
      <Toast v-model="toasts">
        <template #actions="{ props: closeProps }">
          <v-btn icon="prime:times" size="x-small" variant="text" v-bind="closeProps" />
        </template>
</Toast> -->

      <!-- Carousel -->
      <!-- <Carousel>
        <v-carousel-item v-for="slide in carouselSlides" :key="slide.title">
          <v-sheet :color="slide.color" height="100%" class="d-flex align-center justify-center text-h6">
            {{ slide.title }}
          </v-sheet>
        </v-carousel-item>
      </Carousel> -->

      <!-- Image -->
      <!-- <Image
        src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
        alt="Image"
        width="250"
      /> -->

      <!-- Avatar -->
      <!-- <div class="d-flex align-center ga-2">
        <Avatar text="P" />
        <Avatar icon="prime:user" />
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
      </div> -->

      <!-- Badge -->
      <!-- <div class="d-flex align-center ga-2">
        <Badge content="2" rounded="circle" />
        <Badge content="10" />
      </div> -->

      <!-- Chip -->
      <!-- <div class="d-flex flex-wrap ga-2">
        <Chip text="Action" />
        <Chip text="Comedy" />
        <Chip text="Mystery" />
      </div> -->

      <!-- ProgressBar -->
      <!-- <ProgressBar :model-value="50">
        <template #default="{ value }">{{ Math.round(value) }}%</template>
      </ProgressBar> -->

      <!-- ProgressSpinner -->
      <!-- <ProgressSpinner /> -->

      <!-- MeterGroup -->
      <!-- <div class="d-flex flex-column ga-4">
        <MeterGroup :model-value="15" />
        <div class="d-flex align-center ga-2">
          <span style="width: 0.5rem; height: 0.5rem; border-radius: 100%; background: rgb(var(--v-theme-primary));" />
          <span>Space used</span>
        </div>
      </div> -->

      <!-- Skeleton -->
      <!-- <Skeleton /> -->

      <!-- Tag -->
      <div class="d-flex align-center ga-2">
        <Tag text="Primary" />
        <Tag color="tag-success" text="Success" />
        <Tag color="tag-info" text="Info" />
        <Tag color="tag-warn" text="Warn" />
        <Tag color="tag-danger" text="Danger" />
      </div>


      <!-- PanelMenu -->
      <!-- <PanelMenu :items="items5" /> -->



      <!-- Menu -->
      <!-- <Menu :model-value="true">
      <v-list :items="items4" />
      </Menu> -->


      <!-- Breadcrumb -->
      <!-- <Breadcrumb :items="['Home', 'Electronics', 'Computer']" /> -->

      <!-- FileUpload -->
      <!-- <FileUpload /> -->

      <!-- Popover -->
      <!-- <Popover>
        <template v-slot:activator="{ props }">
          <Button v-bind="props" prepend-icon="prime:share-alt" text="Share"></Button>
        </template>
<Card>
  a
</Card>
</Popover> -->


      <!-- Drawer -->
      <!-- <VLayout>
        <Drawer v-model="visible">
          a
        </Drawer>
      </VLayout>
      <Button icon="prime:arrow-right" @click="visible = true" /> -->


      <!-- Dialog -->
      <!-- <Dialog>
        <template v-slot:activator="{ props: activatorProps }">
          <Button v-bind="activatorProps" text="Show"></Button>
        </template>
<template v-slot:default="{ isActive }">
        <Card append-icon="prime:times" />
      </template>
</Dialog> -->

      <!-- Toolbar -->
      <!-- <Toolbar /> -->

      <!-- Tabs -->
      <!-- <Tabs v-model="tab">
        <v-tab value="0">Header I</v-tab>
        <v-tab value="1">Header II</v-tab>
        <v-tab value="2">Header III</v-tab>
      </Tabs>

      <TabPanels v-model="tab">
        <TabPanel value="0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </TabPanel>
        <TabPanel value="1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
          numquam eius modi.
        </TabPanel>
        <TabPanel value="2">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa
          qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus.
        </TabPanel>
      </TabPanels> -->


      <!-- Stepper -->
      <!-- <Stepper :items="['Header I', 'Header II', 'Header III']">
        <template v-slot:item.1>
          Content I
        </template>

<template v-slot:item.2>
        Content II
      </template>

<template v-slot:item.3>
        Content III
      </template>
</Stepper> -->


      <!-- Divider -->
      <!-- <Divider /> -->

      <!-- Card -->
      <!-- <Card title="Simple Card"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!">
      </Card> -->

      <!-- Accordion -->
      <!-- <Accordion>
        <AccordionPanel title="Header I"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
        </AccordionPanel>
        <AccordionPanel title="Header II"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.">
        </AccordionPanel>
        <AccordionPanel title="Header III"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.">
        </AccordionPanel>
      </Accordion> -->

      <!-- VirtualScroller -->
      <!-- <VirtualScroller :height="300"
        :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']">
        <template v-slot:default="{ item }">
          Item {{ item }}
        </template>
</VirtualScroller> -->

      <!-- Tree -->
      <!-- <Tree :items="items" /> -->

      <!-- Timeline -->
      <!-- <Timeline>
        <v-timeline-item>
          Ordered
        </v-timeline-item>

        <v-timeline-item>
          Processing
        </v-timeline-item>

        <v-timeline-item>
          Shipped
        </v-timeline-item>

        <v-timeline-item>
          Delivered
        </v-timeline-item>
      </Timeline> -->

      <!-- Paginator -->
      <!-- <Paginator length="5" /> -->

      <!-- SpeedDial -->
      <!-- <VSheet width="420" height="420" class="text-center">
        <SpeedDial>
          <template v-slot:activator="{ props: activatorProps }">
            <v-fab v-bind="activatorProps" icon="prime:plus"></v-fab>
          </template>

<v-btn key="1" icon="prime:pencil"></v-btn>
<v-btn key="2" icon="prime:refresh"></v-btn>
<v-btn key="3" icon="prime:trash"></v-btn>
<v-btn key="4" icon="prime:upload"></v-btn>
<v-btn key="5" icon="prime:external-link"></v-btn>
</SpeedDial>
</VSheet> -->

      <!-- Button -->
      <!-- <Button text="Click me" /> -->

      <!-- ToggleSwitch -->
      <!-- <ToggleSwitch /> -->

      <!-- ToggleButton -->
      <!-- <ToggleButton /> -->

      <!-- Textarea -->
      <!-- <Textarea /> -->


      <!-- Slider -->
      <!-- <Slider /> -->

      <!-- SelectButton -->
      <!-- <SelectButton>
        <v-btn text="Apple" />
        <v-btn text="Banana" />
        <v-btn text="Cherry" />
        <v-btn text="Date" />
        <v-btn text="Fig" />
      </SelectButton> -->

      <!-- Select -->
      <!-- <Select v-model="value" :items="suggestions" /> -->

      <!-- Rating -->
      <!-- <Rating /> -->

      <!-- RadioButton -->
      <!-- <RadioButton /> -->

      <!-- Password -->
      <!-- <Password /> -->

      <!-- MultiSelect -->
      <!-- <MultiSelect v-model="selected" :items="suggestions" /> -->
      <!-- <MultiSelect v-model="selected" :items="suggestions">
        <template #menu-header="{ search }">
          <div class="d-flex align-center ps-1.75 pe-4 pt-1.75">
            <div>
              <VCheckboxBtn />
            </div>
            <VTextField v-model="search.value" append-inner-icon="prime:search" />
          </div>
        </template>
</MultiSelect> -->

      <!-- Listbox -->
      <!-- <Listbox :items="suggestions" /> -->


      <!-- InputText -->
      <!-- <InputText /> -->


      <!-- InputOtp -->
      <!-- <InputOtp /> -->


      <!-- InputNumber -->
      <!-- <InputNumber /> -->


      <!-- InputMask -->
      <!-- <InputMask mask="99-999999" placeholder="99-999999" /> -->


      <!-- InputGroup -->
      <!-- <InputText v-model="value" placeholder="Price" prefix="$" suffix=".00" /> -->


      <!-- DatePicker -->
      <!-- <DatePicker /> -->


      <!-- ColorPicker -->
      <!-- <ColorPicker /> -->


      <!-- Checkbox -->
      <!-- <Checkbox /> -->


      <!-- CascadeSelect -->
      <!-- <CascadeSelect /> -->


      <!-- AutoComplete -->
      <!-- <AutoComplete width="182" placeholder="Search" :items="['Apple', 'Banana', 'Date', 'Grape']" />
      <AutoComplete placeholder="Search" :items="['Apple', 'Banana', 'Date', 'Grape']" menu-icon="$dropdown" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import {
  Message as PvMessage,
  PanelMenu as PvPanelMenu,
  Menu as PvMenu,
  Breadcrumb as PvBreadcrumb,
  FileUpload as PvFileUpload,
  Popover as PvPopover,
  Drawer as PvDrawer,
  Dialog as PvDialog,
  Stepper as PvStepper,
  StepList as PvStepList,
  StepPanels as PvStepPanels,
  StepItem as PvStepItem,
  Step as PvStep,
  StepPanel as PvStepPanel,
  Panel as PvPanel,
  Card as PvCard,
  VirtualScroller as PvVirtualScroller,
  Accordion as PvAccordion,
  AccordionPanel as PvAccordionPanel,
  AccordionHeader as PvAccordionHeader,
  AccordionContent as PvAccordionContent,
  Tree as PvTree,
  Timeline as PvTimeline,
  Paginator as PvPaginator,
  SpeedDial as PvSpeedDial,
  Button as PvButton,
  ToggleSwitch as PvToggleSwitch,
  ToggleButton as PvToggleButton,
  Slider as PvSlider,
  Textarea as PvTextarea,
  Listbox as PvListbox,
  AutoComplete as PvAutoComplete,
  MultiSelect as PvMultiSelect,
  RadioButton as PvRadioButton,
  Rating as PvRating,
  Select as PvSelect,
  SelectButton as PvSelectButton,
  Password as PvPassword,
  InputOtp as PvInputOtp,
  InputNumber as PvInputNumber,
  InputGroup as PvInputGroup,
  InputGroupAddon as PvInputGroupAddon,
  InputMask as PvInputMask,
  DatePicker as PvDatePicker,
  ColorPicker as PvColorPicker,
  Checkbox as PvCheckbox,
  CascadeSelect as PvCascadeSelect,
  InputText as PvInputText,
  Divider as PvDivider,
  Tabs as PvTabs,
  TabList as PvTabList,
  Tab as PvTab,
  TabPanels as PvTabPanels,
  TabPanel as PvTabPanel,
  Toolbar as PvToolbar,
  Carousel as PvCarousel,
  Image as PvImage,
  Avatar as PvAvatar,
  Badge as PvBadge,
  Chip as PvChip,
  Skeleton as PvSkeleton,
  Tag as PvTag,
} from 'primevue'
import { useToast } from 'primevue/usetoast'

// ==================== PrimeVue demo state ====================
const meterValue = ref([{ label: 'Space used', value: 15, color: 'var(--p-primary-color)' }])

function search (event: { query: string }) {
  items.value = suggestions.filter((item) => item.toLowerCase().includes(event.query.toLowerCase()))
}

const items3 = ref([
  {
    label: 'Update',
    icon: 'pi pi-refresh',
  },
  {
    label: 'Delete',
    icon: 'pi pi-times',
  },
])

const home = ref({
  icon: 'pi pi-home',
  label: 'Home',
})

const events = ref([
  { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
  { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
  { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
  { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
])

const nodes = ref([{
  key: '0',
  label: 'Documents',
  data: 'Documents Folder',
  children: [
    {
      key: '0-0',
      label: 'Work',
      data: 'Work Folder',
      children: [
        { key: '0-0-0', label: 'Expenses.doc', data: 'Expenses Document' },
        { key: '0-0-1', label: 'Resume.doc', data: 'Resume Document' },
      ],
    },
    {
      key: '0-1',
      label: 'Home',
      data: 'Home Folder',
      children: [
        { key: '0-1-0', label: 'Invoices.txt', data: 'Invoices for this month' },
      ],
    },
  ],
}])

const op = ref()
const toggle = (event: any) => {
  op.value.toggle(event)
}

const toast = useToast()
const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 })
}

// ==================== Vuetify demo state ====================
const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']
const items = ref<string[]>([])

const items2 = ref([
  { icon: 'pi pi-pencil' },
  { icon: 'pi pi-refresh' },
  { icon: 'pi pi-trash' },
  { icon: 'pi pi-upload' },
  { icon: 'pi pi-external-link' },
])

const tab = ref('0')
const visible = ref(false)
const value = shallowRef<string>()
const selected = shallowRef<string[]>([])

const items4 = ref([
  {
    title: 'Electronics',
    value: 0,
    props: {
      prependIcon: 'prime:home',
    },
  },
  {
    title: 'Computer',
    value: 1,
    props: {
      prependIcon: 'prime:home',
    },
  },
])

const items5 = ref([
  {
    title: 'Files',
    props: {
      prependIcon: 'prime:file',
    },
    children: [
      {
        title: 'Documents',
        props: {
          prependIcon: 'prime:file',
        },
        children: [
          {
            title: 'Invoices',
            props: {
              prependIcon: 'prime:file-pdf',
            },
            children: [
              {
                title: 'Pending',
                props: {
                  prependIcon: 'prime:stop',
                },
              },
              {
                title: 'Paid',
                props: {
                  prependIcon: 'prime:check-circle',
                },
              },
            ],
          },
          {
            title: 'Clients',
            props: {
              prependIcon: 'prime:users',
            },
          },
        ],
      },
      {
        title: 'Images',
        props: {
          prependIcon: 'prime:image',
        },
        children: [
          {
            title: 'Logos',
            props: {
              prependIcon: 'prime:image',
            },
          },
        ],
      },
    ],
  },
  {
    title: 'Cloud',
    props: {
      prependIcon: 'prime:cloud',
    },
    children: [
      {
        title: 'Upload',
        props: {
          prependIcon: 'prime:cloud-upload',
        },
      },
      {
        title: 'Download',
        props: {
          prependIcon: 'prime:cloud-download',
        },
      },
      {
        title: 'Sync',
        props: {
          prependIcon: 'prime:refresh',
        },
      },
    ],
  },
  {
    title: 'Devices',
    props: {
      prependIcon: 'prime:desktop',
    },
    children: [
      {
        title: 'Phone',
        props: {
          prependIcon: 'prime:mobile',
        },
      },
      {
        title: 'Desktop',
        props: {
          prependIcon: 'prime:desktop',
        },
      },
      {
        title: 'Tablet',
        props: {
          prependIcon: 'prime:tablet',
        },
      },
    ],
  },
])

const carouselSlides = [
  { title: 'Slide 1', color: 'severity-info' },
  { title: 'Slide 2', color: 'severity-success' },
  { title: 'Slide 3', color: 'severity-warning' },
]

const fav = ref(true)
const menu = ref(false)
const message = ref(false)
const hints = ref(true)

const toasts = ref<any[]>([])
const toastConfig: Record<string, { title: string, icon: string }> = {
  success: { title: 'Success', icon: 'prime:check-circle' },
  info: { title: 'Info', icon: 'prime:info-circle' },
  warning: { title: 'Warn', icon: 'prime:exclamation-triangle' },
  error: { title: 'Error', icon: 'prime:times-circle' },
  secondary: { title: 'Secondary', icon: 'prime:info-circle' },
  contrast: { title: 'Contrast', icon: 'prime:info-circle' },
}
function showToast (severity: string) {
  const cfg = toastConfig[severity]
  toasts.value = [...toasts.value, {
    title: cfg.title,
    text: 'Message Content',
    color: `severity-${severity}`,
    prependIcon: cfg.icon,
    timeout: 3000,
  }]
}
</script>
