<template>
  <v-app>
    <v-main>
      <v-container class="py-8" max-width="1200">
        <!-- Hero -->
        <header class="mb-8">
          <h1 class="text-h4 font-weight-bold mb-2">
            PrimeVue Aura Blueprint for Vuetify
          </h1>

          <p class="text-body-1 text-medium-emphasis mb-4">
            Compare PrimeVue Aura components with their Vuetify blueprint equivalents.
          </p>

          <div class="d-flex flex-wrap ga-2">
            <span class="text-caption text-medium-emphasis align-self-center me-1">What to copy:</span>
            <v-chip size="small" variant="outlined">src/plugins/vuetify.ts</v-chip>
            <v-chip size="small" variant="outlined">src/styles</v-chip>
            <v-chip size="small" variant="outlined">font</v-chip>
            <v-chip size="small" variant="outlined">icons</v-chip>
          </div>
        </header>

        <!-- Summary -->
        <v-row class="mb-8">
          <v-col cols="12" sm="4">
            <v-card border class="pa-4" rounded="lg">
              <div class="text-caption text-medium-emphasis mb-1">Ready</div>
              <div class="text-h5 font-weight-bold">{{ statusCounts.ready }}</div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card border class="pa-4" rounded="lg">
              <div class="text-caption text-medium-emphasis mb-1">In progress</div>
              <div class="text-h5 font-weight-bold">{{ statusCounts.todo }}</div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card border class="pa-4" rounded="lg">
              <div class="text-caption text-medium-emphasis mb-1">No equivalent</div>
              <div class="text-h5 font-weight-bold">{{ statusCounts.missing }}</div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Catalog -->
        <section class="mb-8">
          <h2 class="text-h6 font-weight-semibold mb-4">Component catalog</h2>

          <v-row dense>
            <v-col
              v-for="mapping in componentMappings"
              :key="mapping.id"
              cols="12"
              md="4"
              sm="6"
            >
              <v-card
                border
                class="pa-3 catalog-card"
                role="button"
                rounded="lg"
                tabindex="0"
                @click="scrollToComponent(mapping.id)"
                @keydown.enter="scrollToComponent(mapping.id)"
              >
                <div class="d-flex align-center justify-space-between ga-2 mb-1">
                  <span class="text-body-2 font-weight-medium">{{ mapping.primevue }}</span>

                  <v-chip
                    :color="getStatusColor(mapping.status)"
                    size="x-small"
                    variant="flat"
                  >
                    {{ getStatusLabel(mapping.status) }}
                  </v-chip>
                </div>

                <div class="text-caption text-medium-emphasis">
                  {{ mapping.vuetify ?? 'No Vuetify equivalent' }}
                </div>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <!-- Examples -->
        <section>
          <h2 class="text-h6 font-weight-semibold mb-4">Comparisons</h2>

          <v-expansion-panels v-model="expandedPanels" multiple variant="accordion">
            <v-expansion-panel
              v-for="(mapping, index) in componentMappings"
              :id="mapping.id"
              :key="mapping.id"
              :value="index"
            >
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>{{ mapping.primevue }}</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>{{ mapping.vuetify ?? '—' }}</span>

                  <v-chip
                    :color="getStatusColor(mapping.status)"
                    size="x-small"
                    variant="flat"
                  >
                    {{ getStatusLabel(mapping.status) }}
                  </v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet
                    border
                    class="pa-4 compare-column"
                    rounded="lg"
                  >
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <ComponentRender :render="() => renderPrimeVueDemo(mapping.primevue)" />
                  </v-sheet>

                  <v-sheet
                    border
                    class="pa-4 compare-column"
                    rounded="lg"
                  >
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <ComponentRender
                      v-if="mapping.vuetify"
                      :render="() => renderVuetifyDemo(mapping.primevue)"
                    />

                    <v-alert
                      v-else
                      density="compact"
                      type="info"
                      variant="tonal"
                    >
                      No Vuetify equivalent defined yet.
                    </v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </section>
      </v-container>
    </v-main>

    <PvToast />
    <Toast v-model="toasts" />
  </v-app>
</template>

<script lang="ts">
  import { defineComponent, type PropType, type VNode } from 'vue'
</script>

<script lang="ts" setup>
  import {
    Accordion as PvAccordion,
    AccordionContent as PvAccordionContent,
    AccordionHeader as PvAccordionHeader,
    AccordionPanel as PvAccordionPanel,
    AutoComplete as PvAutoComplete,
    Avatar as PvAvatar,
    Badge as PvBadge,
    BlockUI as PvBlockUI,
    Breadcrumb as PvBreadcrumb,
    Button as PvButton,
    Card as PvCard,
    Carousel as PvCarousel,
    CascadeSelect as PvCascadeSelect,
    Checkbox as PvCheckbox,
    Chip as PvChip,
    ColorPicker as PvColorPicker,
    ConfirmDialog as PvConfirmDialog,
    ConfirmPopup as PvConfirmPopup,
    ContextMenu as PvContextMenu,
    DataTable as PvDataTable,
    DataView as PvDataView,
    DatePicker as PvDatePicker,
    DeferredContent as PvDeferredContent,
    Dialog as PvDialog,
    Divider as PvDivider,
    Dock as PvDock,
    Drawer as PvDrawer,
    DynamicDialog as PvDynamicDialog,
    Fieldset as PvFieldset,
    FileUpload as PvFileUpload,
    FloatLabel as PvFloatLabel,
    Fluid as PvFluid,
    Galleria as PvGalleria,
    IconField as PvIconField,
    IftaLabel as PvIftaLabel,
    Image as PvImage,
    ImageCompare as PvImageCompare,
    Inplace as PvInplace,
    InputGroup as PvInputGroup,
    InputGroupAddon as PvInputGroupAddon,
    InputMask as PvInputMask,
    InputNumber as PvInputNumber,
    InputOtp as PvInputOtp,
    InputText as PvInputText,
    Knob as PvKnob,
    Listbox as PvListbox,
    MegaMenu as PvMegaMenu,
    Menu as PvMenu,
    Menubar as PvMenubar,
    Message as PvMessage,
    MeterGroup as PvMeterGroup,
    MultiSelect as PvMultiSelect,
    OrderList as PvOrderList,
    OrganizationChart as PvOrganizationChart,
    Paginator as PvPaginator,
    Panel as PvPanel,
    PanelMenu as PvPanelMenu,
    Password as PvPassword,
    PickList as PvPickList,
    Popover as PvPopover,
    ProgressBar as PvProgressBar,
    ProgressSpinner as PvProgressSpinner,
    RadioButton as PvRadioButton,
    RadioButtonGroup as PvRadioButtonGroup,
    Rating as PvRating,
    ScrollPanel as PvScrollPanel,
    ScrollTop as PvScrollTop,
    Select as PvSelect,
    SelectButton as PvSelectButton,
    Skeleton as PvSkeleton,
    Slider as PvSlider,
    SpeedDial as PvSpeedDial,
    SplitButton as PvSplitButton,
    Splitter as PvSplitter,
    Step as PvStep,
    StepItem as PvStepItem,
    StepList as PvStepList,
    StepPanel as PvStepPanel,
    StepPanels as PvStepPanels,
    Stepper as PvStepper,
    Tab as PvTab,
    TabList as PvTabList,
    TabPanel as PvTabPanel,
    TabPanels as PvTabPanels,
    Tabs as PvTabs,
    Tag as PvTag,
    Terminal as PvTerminal,
    Textarea as PvTextarea,
    TieredMenu as PvTieredMenu,
    Timeline as PvTimeline,
    Toast as PvToast,
    ToggleButton as PvToggleButton,
    ToggleSwitch as PvToggleSwitch,
    Toolbar as PvToolbar,
    Tree as PvTree,
    TreeSelect as PvTreeSelect,
    TreeTable as PvTreeTable,
    VirtualScroller as PvVirtualScroller,
  } from 'primevue'
  import { computed, h, nextTick, ref, resolveComponent, shallowRef } from 'vue'
  import {
    VBtn,
    VCarouselItem,
    VFab,
    VList,
    VSheet,
    VTimelineItem,
  } from 'vuetify/components'

  const ComponentRender = defineComponent({
    name: 'ComponentRender',
    props: {
      render: {
        type: Function as PropType<() => VNode | null>,
        required: true,
      },
    },
    setup (props) {
      return props.render
    },
  })

  type MappingStatus = 'ready' | 'todo' | 'missing'

  interface ComponentMapping {
    id: string
    primevue: string
    vuetify: string | null
    status: MappingStatus
  }

  const componentMappings: ComponentMapping[] = [
    { id: 'component-autocomplete', primevue: 'AutoComplete', vuetify: 'VAutocomplete', status: 'ready' },
    { id: 'component-cascadeselect', primevue: 'CascadeSelect', vuetify: null, status: 'missing' },
    { id: 'component-checkbox', primevue: 'Checkbox', vuetify: 'VCheckbox', status: 'ready' },
    { id: 'component-colorpicker', primevue: 'ColorPicker', vuetify: 'VColorPicker', status: 'ready' },
    { id: 'component-datepicker', primevue: 'DatePicker', vuetify: 'VDateInput', status: 'ready' },
    { id: 'component-editor', primevue: 'Editor', vuetify: null, status: 'missing' },
    { id: 'component-floatlabel', primevue: 'FloatLabel', vuetify: null, status: 'missing' },
    { id: 'component-iconfield', primevue: 'IconField', vuetify: null, status: 'missing' },
    { id: 'component-iftalabel', primevue: 'IftaLabel', vuetify: null, status: 'missing' },
    { id: 'component-inputgroup', primevue: 'InputGroup', vuetify: null, status: 'missing' },
    { id: 'component-inputmask', primevue: 'InputMask', vuetify: 'VMaskInput', status: 'ready' },
    { id: 'component-inputnumber', primevue: 'InputNumber', vuetify: 'VNumberInput', status: 'ready' },
    { id: 'component-inputotp', primevue: 'InputOtp', vuetify: 'VOtpInput', status: 'ready' },
    { id: 'component-inputtext', primevue: 'InputText', vuetify: 'VTextField', status: 'ready' },
    { id: 'component-knob', primevue: 'Knob', vuetify: null, status: 'missing' },
    { id: 'component-listbox', primevue: 'Listbox', vuetify: 'VList', status: 'ready' },
    { id: 'component-multiselect', primevue: 'MultiSelect', vuetify: 'VSelect', status: 'ready' },
    { id: 'component-password', primevue: 'Password', vuetify: 'VTextField', status: 'ready' },
    { id: 'component-radiobuttongroup', primevue: 'RadioButtonGroup', vuetify: 'VRadioGroup', status: 'ready' },
    { id: 'component-radiobutton', primevue: 'RadioButton', vuetify: 'VRadio', status: 'ready' },
    { id: 'component-rating', primevue: 'Rating', vuetify: 'VRating', status: 'ready' },
    { id: 'component-select', primevue: 'Select', vuetify: 'VSelect', status: 'ready' },
    { id: 'component-selectbutton', primevue: 'SelectButton', vuetify: 'VBtnToggle', status: 'ready' },
    { id: 'component-slider', primevue: 'Slider', vuetify: 'VSlider', status: 'ready' },
    { id: 'component-textarea', primevue: 'Textarea', vuetify: 'VTextarea', status: 'ready' },
    { id: 'component-togglebutton', primevue: 'ToggleButton', vuetify: 'VBtn', status: 'ready' },
    { id: 'component-toggleswitch', primevue: 'ToggleSwitch', vuetify: 'VSwitch', status: 'ready' },
    { id: 'component-treeselect', primevue: 'TreeSelect', vuetify: null, status: 'missing' },
    { id: 'component-button', primevue: 'Button', vuetify: 'VBtn', status: 'ready' },
    { id: 'component-speeddial', primevue: 'SpeedDial', vuetify: 'VSpeedDial', status: 'ready' },
    { id: 'component-splitbutton', primevue: 'SplitButton', vuetify: null, status: 'missing' },
    { id: 'component-datatable', primevue: 'DataTable', vuetify: 'VDataTable', status: 'todo' },
    { id: 'component-dataview', primevue: 'DataView', vuetify: 'VDataIterator', status: 'todo' },
    { id: 'component-orderlist', primevue: 'OrderList', vuetify: null, status: 'missing' },
    { id: 'component-organizationchart', primevue: 'OrganizationChart', vuetify: null, status: 'missing' },
    { id: 'component-paginator', primevue: 'Paginator', vuetify: 'VPagination', status: 'ready' },
    { id: 'component-picklist', primevue: 'PickList', vuetify: null, status: 'missing' },
    { id: 'component-timeline', primevue: 'Timeline', vuetify: 'VTimeline', status: 'ready' },
    { id: 'component-tree', primevue: 'Tree', vuetify: 'VTreeview', status: 'todo' },
    { id: 'component-treetable', primevue: 'TreeTable', vuetify: null, status: 'missing' },
    { id: 'component-virtualscroller', primevue: 'VirtualScroller', vuetify: 'VVirtualScroll', status: 'ready' },
    { id: 'component-accordion', primevue: 'Accordion', vuetify: 'VExpansionPanels', status: 'ready' },
    { id: 'component-accordionpanel', primevue: 'AccordionPanel', vuetify: 'VExpansionPanel', status: 'ready' },
    { id: 'component-accordionheader', primevue: 'AccordionHeader', vuetify: 'VExpansionPanelTitle', status: 'ready' },
    { id: 'component-accordioncontent', primevue: 'AccordionContent', vuetify: 'VExpansionPanelText', status: 'ready' },
    { id: 'component-card', primevue: 'Card', vuetify: 'VCard', status: 'ready' },
    { id: 'component-deferredcontent', primevue: 'DeferredContent', vuetify: 'VLazy', status: 'ready' },
    { id: 'component-divider', primevue: 'Divider', vuetify: 'VDivider', status: 'ready' },
    { id: 'component-fieldset', primevue: 'Fieldset', vuetify: null, status: 'missing' },
    { id: 'component-panel', primevue: 'Panel', vuetify: null, status: 'missing' },
    { id: 'component-scrollpanel', primevue: 'ScrollPanel', vuetify: null, status: 'missing' },
    { id: 'component-splitter', primevue: 'Splitter', vuetify: null, status: 'missing' },
    { id: 'component-stepper', primevue: 'Stepper', vuetify: 'VStepper', status: 'ready' },
    { id: 'component-steplist', primevue: 'StepList', vuetify: 'VStepperHeader', status: 'ready' },
    { id: 'component-step', primevue: 'Step', vuetify: 'VStepperItem', status: 'ready' },
    { id: 'component-steppanels', primevue: 'StepPanels', vuetify: 'VStepperWindow', status: 'ready' },
    { id: 'component-steppanel', primevue: 'StepPanel', vuetify: 'VStepperWindowItem', status: 'ready' },
    { id: 'component-stepitem', primevue: 'StepItem', vuetify: 'VStepperVertical', status: 'ready' },
    { id: 'component-tabs', primevue: 'Tabs', vuetify: 'VTabs', status: 'ready' },
    { id: 'component-tablist', primevue: 'TabList', vuetify: null, status: 'missing' },
    { id: 'component-tab', primevue: 'Tab', vuetify: 'VTab', status: 'ready' },
    { id: 'component-tabpanels', primevue: 'TabPanels', vuetify: 'VTabsWindow', status: 'ready' },
    { id: 'component-tabpanel', primevue: 'TabPanel', vuetify: 'VTabsWindowItem', status: 'ready' },
    { id: 'component-toolbar', primevue: 'Toolbar', vuetify: 'VToolbar', status: 'ready' },
    { id: 'component-confirmdialog', primevue: 'ConfirmDialog', vuetify: 'VConfirmEdit', status: 'ready' },
    { id: 'component-confirmpopup', primevue: 'ConfirmPopup', vuetify: null, status: 'missing' },
    { id: 'component-dialog', primevue: 'Dialog', vuetify: 'VDialog', status: 'ready' },
    { id: 'component-drawer', primevue: 'Drawer', vuetify: 'VNavigationDrawer', status: 'ready' },
    { id: 'component-dynamicdialog', primevue: 'DynamicDialog', vuetify: null, status: 'missing' },
    { id: 'component-popover', primevue: 'Popover', vuetify: 'VMenu', status: 'ready' },
    { id: 'component-fileupload', primevue: 'FileUpload', vuetify: 'VFileUpload', status: 'todo' },
    { id: 'component-breadcrumb', primevue: 'Breadcrumb', vuetify: 'VBreadcrumbs', status: 'ready' },
    { id: 'component-contextmenu', primevue: 'ContextMenu', vuetify: null, status: 'missing' },
    { id: 'component-dock', primevue: 'Dock', vuetify: null, status: 'missing' },
    { id: 'component-menu', primevue: 'Menu', vuetify: 'VMenu', status: 'todo' },
    { id: 'component-menubar', primevue: 'Menubar', vuetify: null, status: 'missing' },
    { id: 'component-megamenu', primevue: 'MegaMenu', vuetify: null, status: 'missing' },
    { id: 'component-panelmenu', primevue: 'PanelMenu', vuetify: 'VList', status: 'todo' },
    { id: 'component-tieredmenu', primevue: 'TieredMenu', vuetify: null, status: 'missing' },
    { id: 'component-chart', primevue: 'Chart', vuetify: null, status: 'missing' },
    { id: 'component-message', primevue: 'Message', vuetify: 'VAlert', status: 'ready' },
    { id: 'component-toast', primevue: 'Toast', vuetify: 'VSnackbarQueue', status: 'ready' },
    { id: 'component-carousel', primevue: 'Carousel', vuetify: 'VCarousel', status: 'ready' },
    { id: 'component-galleria', primevue: 'Galleria', vuetify: null, status: 'missing' },
    { id: 'component-image', primevue: 'Image', vuetify: 'VImg', status: 'ready' },
    { id: 'component-imagecompare', primevue: 'ImageCompare', vuetify: null, status: 'missing' },
    { id: 'component-avatar', primevue: 'Avatar', vuetify: 'VAvatar', status: 'ready' },
    { id: 'component-badge', primevue: 'Badge', vuetify: 'VBadge', status: 'ready' },
    { id: 'component-blockui', primevue: 'BlockUI', vuetify: null, status: 'missing' },
    { id: 'component-chip', primevue: 'Chip', vuetify: 'VChip', status: 'ready' },
    { id: 'component-fluid', primevue: 'Fluid', vuetify: null, status: 'missing' },
    { id: 'component-inplace', primevue: 'Inplace', vuetify: null, status: 'missing' },
    { id: 'component-metergroup', primevue: 'MeterGroup', vuetify: 'VProgressLinear', status: 'ready' },
    { id: 'component-progressbar', primevue: 'ProgressBar', vuetify: 'VProgressLinear', status: 'ready' },
    { id: 'component-progressspinner', primevue: 'ProgressSpinner', vuetify: 'VProgressCircular', status: 'ready' },
    { id: 'component-scrolltop', primevue: 'ScrollTop', vuetify: null, status: 'missing' },
    { id: 'component-skeleton', primevue: 'Skeleton', vuetify: 'VSkeletonLoader', status: 'ready' },
    { id: 'component-tag', primevue: 'Tag', vuetify: 'VChip', status: 'ready' },
    { id: 'component-terminal', primevue: 'Terminal', vuetify: null, status: 'missing' },
  ]

  const expandedPanels = ref<number[]>([])
  const toasts = ref<any[]>([])

  const basicValue = shallowRef<string | null>(null)
  const basicOptions = ['Apple', 'Banana', 'Cherry']
  const basicItems = [{ label: 'Item' }, { label: 'Item 2' }]
  const basicTree = [{ key: '0', label: 'Root', children: [{ key: '0-0', label: 'Child' }] }]
  const basicSlides = [{ title: 'Slide', bg: '#eff6ff' }]
  const basicTableData = [{ name: 'Item' }]
  const basicTimeline = [{ status: 'Step' }]
  const tab = ref('0')
  const visible = ref(false)

  const statusCounts = computed(() => ({
    ready: componentMappings.filter(m => m.status === 'ready').length,
    todo: componentMappings.filter(m => m.status === 'todo').length,
    missing: componentMappings.filter(m => m.status === 'missing').length,
  }))

  const pvComponents: Record<string, any> = {
    AutoComplete: PvAutoComplete,
    CascadeSelect: PvCascadeSelect,
    Checkbox: PvCheckbox,
    ColorPicker: PvColorPicker,
    DatePicker: PvDatePicker,
    FloatLabel: PvFloatLabel,
    IconField: PvIconField,
    IftaLabel: PvIftaLabel,
    InputGroup: PvInputGroup,
    InputMask: PvInputMask,
    InputNumber: PvInputNumber,
    InputOtp: PvInputOtp,
    InputText: PvInputText,
    Knob: PvKnob,
    Listbox: PvListbox,
    MultiSelect: PvMultiSelect,
    Password: PvPassword,
    RadioButton: PvRadioButton,
    RadioButtonGroup: PvRadioButtonGroup,
    Rating: PvRating,
    Select: PvSelect,
    SelectButton: PvSelectButton,
    Slider: PvSlider,
    Textarea: PvTextarea,
    ToggleButton: PvToggleButton,
    ToggleSwitch: PvToggleSwitch,
    TreeSelect: PvTreeSelect,
    Button: PvButton,
    SpeedDial: PvSpeedDial,
    SplitButton: PvSplitButton,
    DataTable: PvDataTable,
    DataView: PvDataView,
    OrderList: PvOrderList,
    OrganizationChart: PvOrganizationChart,
    Paginator: PvPaginator,
    PickList: PvPickList,
    Timeline: PvTimeline,
    Tree: PvTree,
    TreeTable: PvTreeTable,
    VirtualScroller: PvVirtualScroller,
    Accordion: PvAccordion,
    AccordionPanel: PvAccordionPanel,
    AccordionHeader: PvAccordionHeader,
    AccordionContent: PvAccordionContent,
    Card: PvCard,
    DeferredContent: PvDeferredContent,
    Divider: PvDivider,
    Fieldset: PvFieldset,
    Panel: PvPanel,
    ScrollPanel: PvScrollPanel,
    Splitter: PvSplitter,
    Stepper: PvStepper,
    StepList: PvStepList,
    Step: PvStep,
    StepPanels: PvStepPanels,
    StepPanel: PvStepPanel,
    StepItem: PvStepItem,
    Tabs: PvTabs,
    TabList: PvTabList,
    Tab: PvTab,
    TabPanels: PvTabPanels,
    TabPanel: PvTabPanel,
    Toolbar: PvToolbar,
    ConfirmDialog: PvConfirmDialog,
    ConfirmPopup: PvConfirmPopup,
    Dialog: PvDialog,
    Drawer: PvDrawer,
    DynamicDialog: PvDynamicDialog,
    Popover: PvPopover,
    FileUpload: PvFileUpload,
    Breadcrumb: PvBreadcrumb,
    ContextMenu: PvContextMenu,
    Dock: PvDock,
    Menu: PvMenu,
    Menubar: PvMenubar,
    MegaMenu: PvMegaMenu,
    PanelMenu: PvPanelMenu,
    TieredMenu: PvTieredMenu,
    Message: PvMessage,
    Toast: PvToast,
    Carousel: PvCarousel,
    Galleria: PvGalleria,
    Image: PvImage,
    ImageCompare: PvImageCompare,
    Avatar: PvAvatar,
    Badge: PvBadge,
    BlockUI: PvBlockUI,
    Chip: PvChip,
    Fluid: PvFluid,
    Inplace: PvInplace,
    MeterGroup: PvMeterGroup,
    ProgressBar: PvProgressBar,
    ProgressSpinner: PvProgressSpinner,
    ScrollTop: PvScrollTop,
    Skeleton: PvSkeleton,
    Tag: PvTag,
    Terminal: PvTerminal,
  }

  function getStatusColor (status: MappingStatus) {
    if (status === 'ready') return 'success'
    if (status === 'todo') return 'warning'
    return 'secondary'
  }

  function getStatusLabel (status: MappingStatus) {
    if (status === 'ready') return 'Ready'
    if (status === 'todo') return 'In progress'
    return 'No equivalent'
  }

  function scrollToComponent (id: string) {
    const index = componentMappings.findIndex(m => m.id === id)
    if (index !== -1 && !expandedPanels.value.includes(index)) {
      expandedPanels.value = [...expandedPanels.value, index]
    }
    nextTick(() => {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  function unavailable (message = 'Not available in demo') {
    return h('span', { class: 'text-medium-emphasis text-caption' }, message)
  }

  function renderMinimalAccordionPv () {
    return h(PvAccordion, {}, () => [
      h(PvAccordionPanel, { value: '0' }, () => [
        h(PvAccordionHeader, {}, () => 'Header'),
        h(PvAccordionContent, {}, () => 'Content'),
      ]),
    ])
  }

  function renderMinimalTabsPv () {
    return h(PvTabs, { value: '0' }, () => [
      h(PvTabList, {}, () => h(PvTab, { value: '0' }, () => 'Tab')),
      h(PvTabPanels, {}, () => h(PvTabPanel, { value: '0' }, () => 'Content')),
    ])
  }

  function renderMinimalStepperPv () {
    return h(PvStepper, { value: '1' }, () => [
      h(PvStepList, {}, () => h(PvStep, { value: '1' }, () => 'Step')),
      h(PvStepPanels, {}, () => h(PvStepPanel, { value: '1' }, () => 'Content')),
    ])
  }

  function renderMinimalAccordionV () {
    return h(resolveComponent('Accordion'), {}, () => [
      h(resolveComponent('AccordionPanel'), { title: 'Header', text: 'Content' }),
    ])
  }

  function renderMinimalTabsV () {
    return [
      h(resolveComponent('Tabs'), { 'modelValue': tab.value, 'onUpdate:modelValue': (v: string) => {
        tab.value = v
      } }, () => [
        h(resolveComponent('Tab'), { value: '0' }, () => 'Tab'),
      ]),
      h(resolveComponent('TabPanels'), { 'modelValue': tab.value, 'onUpdate:modelValue': (v: string) => {
        tab.value = v
      } }, () => [
        h(resolveComponent('TabPanel'), { value: '0' }, () => 'Content'),
      ]),
    ]
  }

  function renderMinimalStepperV () {
    return h(resolveComponent('Stepper'), { items: ['Step'] }, () => [
      h('template', { '#item.1': '' }, () => 'Content'),
    ])
  }

  function renderPrimeVueDemo (name: string): VNode | null {
    switch (name) {
      case 'Accordion':
      case 'AccordionPanel':
      case 'AccordionHeader':
      case 'AccordionContent': {
        return renderMinimalAccordionPv()
      }
      case 'Tabs':
      case 'TabList':
      case 'Tab':
      case 'TabPanels':
      case 'TabPanel': {
        return renderMinimalTabsPv()
      }
      case 'Stepper':
      case 'StepList':
      case 'Step':
      case 'StepPanels':
      case 'StepPanel': {
        return renderMinimalStepperPv()
      }
      case 'RadioButtonGroup': {
        return h(PvRadioButtonGroup, { 'modelValue': basicValue.value, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } }, () => h(PvRadioButton, { value: 'a' }))
      }
      case 'RadioButton': {
        return h(PvRadioButtonGroup, { 'modelValue': basicValue.value, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } }, () => h(PvRadioButton, { value: 'a' }))
      }
      case 'InputGroup': {
        return h(PvInputGroup, {}, () => [h(PvInputGroupAddon, {}, () => '$'), h(PvInputText)])
      }
      case 'Select':
      case 'MultiSelect':
      case 'Listbox': {
        return h(pvComponents[name], { 'modelValue': basicValue.value, 'options': basicOptions, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } })
      }
      case 'SelectButton': {
        return h(PvSelectButton, { 'modelValue': basicValue.value, 'options': basicOptions, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } })
      }
      case 'Tree':
      case 'TreeSelect': {
        return h(pvComponents[name], { 'modelValue': basicValue.value, 'value': basicTree, 'options': basicTree, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } })
      }
      case 'Carousel': {
        return h(PvCarousel, { value: basicSlides, numVisible: 1, numScroll: 1 }, {
          item: ({ data }: { data: { title: string, bg: string } }) => h('div', { style: { background: data.bg, height: '120px' } }, data.title),
        })
      }
      case 'DataTable': {
        return h(PvDataTable, { value: basicTableData })
      }
      case 'DataView': {
        return h(PvDataView, { value: basicTableData })
      }
      case 'Timeline': {
        return h(PvTimeline, { value: basicTimeline }, { content: ({ item }: { item: { status: string } }) => item.status })
      }
      case 'Breadcrumb': {
        return h(PvBreadcrumb, { model: basicItems })
      }
      case 'Paginator': {
        return h(PvPaginator, { rows: 10, totalRecords: 50 })
      }
      case 'VirtualScroller': {
        return h(PvVirtualScroller, { items: basicOptions, itemSize: 32, style: { height: '120px' } }, { item: ({ item }: { item: string }) => h('div', item) })
      }
      case 'MeterGroup': {
        return h(PvMeterGroup, { value: [{ label: 'Used', value: 15 }] })
      }
      case 'ProgressBar': {
        return h(PvProgressBar, { value: 50 })
      }
      case 'Image': {
        return h(PvImage, { src: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg', alt: 'Image', width: 120 })
      }
      case 'Card': {
        return h(PvCard, {}, { title: () => 'Card', content: () => 'Content' })
      }
      case 'Toolbar': {
        return h(PvToolbar, {}, { start: () => 'Toolbar' })
      }
      case 'Message': {
        return h(PvMessage, {}, () => 'Message')
      }
      case 'Toast': {
        return h(PvButton, { label: 'Show', onClick: () => {} })
      }
      case 'Dialog': {
        return h(PvButton, { label: 'Show', onClick: () => {
          visible.value = true
        } })
      }
      case 'Drawer': {
        return h(PvButton, { icon: 'pi pi-arrow-right', onClick: () => {
          visible.value = true
        } })
      }
      case 'Avatar': {
        return h(PvAvatar)
      }
      case 'Badge': {
        return h(PvBadge)
      }
      case 'Tag': {
        return h(PvTag, { value: 'Primary' })
      }
      case 'Button': {
        return h(PvButton, {}, () => 'Button')
      }
      case 'ToggleButton': {
        return h(PvToggleButton, { modelValue: false })
      }
      case 'Chip': {
        return h(PvChip, { label: 'Chip' })
      }
      case 'SpeedDial': {
        return h(PvSpeedDial, { model: [{ icon: 'pi pi-pencil' }] })
      }
      case 'Menu':
      case 'PanelMenu': {
        return h(pvComponents[name], { model: basicItems })
      }
      case 'Editor':
      case 'Chart': {
        return unavailable('Requires optional dependency (quill / chart.js)')
      }
      default: {
        const Comp = pvComponents[name]
        if (!Comp) return unavailable()
        return h(Comp)
      }
    }
  }

  function renderVuetifyDemo (name: string): VNode | null {
    switch (name) {
      case 'Accordion':
      case 'AccordionPanel':
      case 'AccordionHeader':
      case 'AccordionContent': {
        return renderMinimalAccordionV()
      }
      case 'Tabs':
      case 'Tab':
      case 'TabPanels':
      case 'TabPanel': {
        return h('div', {}, renderMinimalTabsV())
      }
      case 'Stepper':
      case 'StepList':
      case 'Step':
      case 'StepPanels':
      case 'StepPanel':
      case 'StepItem': {
        return renderMinimalStepperV()
      }
      case 'RadioButtonGroup': {
        return h(resolveComponent('RadioButtonGroup'), { 'modelValue': basicValue.value, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } }, () => h(resolveComponent('RadioButton'), { value: 'a' }))
      }
      case 'RadioButton': {
        return h(resolveComponent('RadioButtonGroup'), { 'modelValue': basicValue.value, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } }, () => h(resolveComponent('RadioButton'), { value: 'a' }))
      }
      case 'Select':
      case 'MultiSelect': {
        return h(resolveComponent(name), { 'modelValue': basicValue.value, 'items': basicOptions, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } })
      }
      case 'Listbox': {
        return h(resolveComponent('Listbox'), { items: basicOptions })
      }
      case 'SelectButton': {
        return h(resolveComponent('SelectButton'), { 'modelValue': basicValue.value, 'onUpdate:modelValue': (v: string) => {
          basicValue.value = v
        } }, () => basicOptions.map(o => h(resolveComponent('Button'), { text: o, value: o })))
      }
      case 'Tree': {
        return h(resolveComponent('Tree'), { items: [{ id: 0, title: 'Root', children: [{ id: 1, title: 'Child' }] }] })
      }
      case 'Carousel': {
        return h(resolveComponent('Carousel'), {}, () => h(VCarouselItem, {}, () => h(VSheet, { height: 120, color: 'surface-variant', class: 'd-flex align-center justify-center' }, () => 'Slide')))
      }
      case 'DataTable': {
        return h(resolveComponent('DataTable'), { items: basicTableData, headers: [{ title: 'Name', key: 'name' }] })
      }
      case 'DataView': {
        return h(resolveComponent('DataView'), { items: basicTableData })
      }
      case 'Timeline': {
        return h(resolveComponent('Timeline'), {}, () => h(VTimelineItem, {}, () => 'Step'))
      }
      case 'Breadcrumb': {
        return h(resolveComponent('Breadcrumb'), { items: ['Home', 'Section'] })
      }
      case 'Paginator': {
        return h(resolveComponent('Paginator'), { length: 5 })
      }
      case 'VirtualScroller': {
        return h(resolveComponent('VirtualScroller'), { items: basicOptions, height: 120 }, { default: ({ item }: { item: string }) => h('div', item) })
      }
      case 'MeterGroup': {
        return h(resolveComponent('MeterGroup'), { modelValue: 15 })
      }
      case 'ProgressBar': {
        return h(resolveComponent('ProgressBar'), { modelValue: 50 })
      }
      case 'Image': {
        return h(resolveComponent('Image'), { src: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg', alt: 'Image', width: 120 })
      }
      case 'Card': {
        return h(resolveComponent('Card'), { title: 'Card', text: 'Content' })
      }
      case 'Toolbar': {
        return h(resolveComponent('Toolbar'))
      }
      case 'Message': {
        return h(resolveComponent('Message'), {}, () => 'Message')
      }
      case 'Toast': {
        return h(resolveComponent('Button'), { text: 'Show', onClick: () => {
          toasts.value = [{ title: 'Info', text: 'Message', timeout: 3000 }]
        } })
      }
      case 'Dialog': {
        return h(resolveComponent('Dialog'), {}, {
          activator: ({ props }: { props: Record<string, unknown> }) => h(resolveComponent('Button'), { ...props, text: 'Show' }),
          default: () => h(resolveComponent('Card'), { title: 'Dialog' }),
        })
      }
      case 'Drawer': {
        return h('div', {}, [
          h(resolveComponent('Button'), { icon: 'prime:arrow-right', onClick: () => {
            visible.value = true
          } }),
        ])
      }
      case 'Avatar': {
        return h(resolveComponent('Avatar'))
      }
      case 'Badge': {
        return h(resolveComponent('Badge'), { content: '2' })
      }
      case 'Tag': {
        return h(resolveComponent('Tag'), { text: 'Primary' })
      }
      case 'Button': {
        return h(resolveComponent('Button'), { text: 'Button' })
      }
      case 'ToggleButton': {
        return h(resolveComponent('ToggleButton'))
      }
      case 'Chip': {
        return h(resolveComponent('Chip'), { text: 'Chip' })
      }
      case 'SpeedDial': {
        return h(resolveComponent('SpeedDial'), {}, {
          activator: ({ props }: { props: Record<string, unknown> }) => h(VFab, { ...props, icon: 'prime:plus' }),
          default: () => h(VBtn, { icon: 'prime:pencil' }),
        })
      }
      case 'Menu': {
        return h(resolveComponent('Menu'), { modelValue: true }, () => h(VList, { items: basicOptions.map((o, i) => ({ title: o, value: i })) }))
      }
      case 'PanelMenu': {
        return h(resolveComponent('PanelMenu'), { items: [{ title: 'Item', value: 0 }] })
      }
      case 'FileUpload': {
        return h(resolveComponent('FileUpload'))
      }
      case 'Popover': {
        return h(resolveComponent('Button'), { text: 'Share', prependIcon: 'prime:share-alt' })
      }
      case 'ConfirmDialog': {
        return h(resolveComponent('ConfirmDialog'))
      }
      case 'Password': {
        return h(resolveComponent('Password'))
      }
      case 'InputText':
      case 'Textarea':
      case 'InputNumber':
      case 'InputMask':
      case 'InputOtp':
      case 'Checkbox':
      case 'ToggleSwitch':
      case 'Slider':
      case 'Rating':
      case 'ColorPicker':
      case 'DatePicker':
      case 'AutoComplete':
      case 'Divider':
      case 'Skeleton':
      case 'ProgressSpinner':
      case 'DeferredContent': {
        return h(resolveComponent(name))
      }
      default: {
        return h(resolveComponent(name))
      }
    }
  }
</script>

<style scoped>
.catalog-card {
  cursor: pointer;
  transition: box-shadow 0.15s ease;
}

.catalog-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.compare-column {
  flex: 1 1 280px;
  min-width: 0;
}
</style>
