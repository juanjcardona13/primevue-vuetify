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
            <v-col v-for="mapping in componentMappings" :key="mapping.id" cols="12" md="4" sm="6">
              <v-card border class="pa-3 catalog-card" role="button" rounded="lg" tabindex="0"
                @click="scrollToComponent(mapping.id)" @keydown.enter="scrollToComponent(mapping.id)">
                <div class="d-flex align-center justify-space-between ga-2 mb-1">
                  <span class="text-body-2 font-weight-medium">{{ mapping.primevue }}</span>

                  <v-chip :color="getStatusColor(mapping.status)" size="x-small" variant="flat">
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
            <AutoCompleteComparison />
            <CascadeSelectComparison />
            <CheckboxComparison />
            <ColorPickerComparison />
            <DatePickerComparison />
            <EditorComparison />
            <FloatLabelComparison />
            <IconFieldComparison />
            <IftaLabelComparison />
            <InputGroupComparison />
            <InputMaskComparison />
            <InputNumberComparison />
            <InputOtpComparison />
            <InputTextComparison />
            <KnobComparison />
            <ListboxComparison />
            <MultiSelectComparison />
            <PasswordComparison />
            <RadioButtonGroupComparison />
            <RadioButtonComparison />
            <RatingComparison />
            <SelectComparison />
            <SelectButtonComparison />
            <SliderComparison />
            <TextareaComparison />
            <ToggleButtonComparison />
            <ToggleSwitchComparison />
            <TreeSelectComparison />
            <ButtonComparison />
            <SpeedDialComparison />
            <SplitButtonComparison />
            <DataTableComparison />
            <DataViewComparison />
            <OrderListComparison />
            <OrganizationChartComparison />
            <PaginatorComparison />
            <PickListComparison />
            <TimelineComparison />
            <TreeComparison />
            <TreeTableComparison />
            <VirtualScrollerComparison />
            <AccordionComparison />
            <AccordionPanelComparison />
            <AccordionHeaderComparison />
            <AccordionContentComparison />
            <CardComparison />
            <DeferredContentComparison />
            <DividerComparison />
            <FieldsetComparison />
            <PanelComparison />
            <ScrollPanelComparison />
            <SplitterComparison />
            <StepperComparison />
            <StepListComparison />
            <StepComparison />
            <StepPanelsComparison />
            <StepPanelComparison />
            <StepItemComparison />
            <TabsComparison />
            <TabListComparison />
            <TabComparison />
            <TabPanelsComparison />
            <TabPanelComparison />
            <ToolbarComparison />
            <ConfirmDialogComparison />
            <ConfirmPopupComparison />
            <DialogComparison />
            <DrawerComparison />
            <DynamicDialogComparison />
            <PopoverComparison />
            <FileUploadComparison />
            <BreadcrumbComparison />
            <ContextMenuComparison />
            <DockComparison />
            <MenuComparison />
            <MenubarComparison />
            <MegaMenuComparison />
            <PanelMenuComparison />
            <TieredMenuComparison />
            <ChartComparison />
            <MessageComparison />
            <ToastComparison />
            <CarouselComparison />
            <GalleriaComparison />
            <ImageComparison />
            <ImageCompareComparison />
            <AvatarComparison />
            <BadgeComparison />
            <BlockUIComparison />
            <ChipComparison />
            <FluidComparison />
            <InplaceComparison />
            <MeterGroupComparison />
            <ProgressBarComparison />
            <ProgressSpinnerComparison />
            <ScrollTopComparison />
            <SkeletonComparison />
            <TagComparison />
            <TerminalComparison />
          </v-expansion-panels>
        </section>
      </v-container>
    </v-main>

    <PvToast />
  </v-app>
</template>

<script lang="ts" setup>
import { Toast as PvToast } from 'primevue'
import { computed, nextTick, ref } from 'vue'
import AccordionComparison from '@/comparisons/Accordion.vue'
import AccordionContentComparison from '@/comparisons/AccordionContent.vue'
import AccordionHeaderComparison from '@/comparisons/AccordionHeader.vue'
import AccordionPanelComparison from '@/comparisons/AccordionPanel.vue'
import AutoCompleteComparison from '@/comparisons/AutoComplete.vue'
import AvatarComparison from '@/comparisons/Avatar.vue'
import BadgeComparison from '@/comparisons/Badge.vue'
import BlockUIComparison from '@/comparisons/BlockUI.vue'
import BreadcrumbComparison from '@/comparisons/Breadcrumb.vue'
import ButtonComparison from '@/comparisons/Button.vue'
import CardComparison from '@/comparisons/Card.vue'
import CarouselComparison from '@/comparisons/Carousel.vue'
import CascadeSelectComparison from '@/comparisons/CascadeSelect.vue'
import ChartComparison from '@/comparisons/Chart.vue'
import CheckboxComparison from '@/comparisons/Checkbox.vue'
import ChipComparison from '@/comparisons/Chip.vue'
import ColorPickerComparison from '@/comparisons/ColorPicker.vue'
import ConfirmDialogComparison from '@/comparisons/ConfirmDialog.vue'
import ConfirmPopupComparison from '@/comparisons/ConfirmPopup.vue'
import ContextMenuComparison from '@/comparisons/ContextMenu.vue'
import DataTableComparison from '@/comparisons/DataTable.vue'
import DataViewComparison from '@/comparisons/DataView.vue'
import DatePickerComparison from '@/comparisons/DatePicker.vue'
import DeferredContentComparison from '@/comparisons/DeferredContent.vue'
import DialogComparison from '@/comparisons/Dialog.vue'
import DividerComparison from '@/comparisons/Divider.vue'
import DockComparison from '@/comparisons/Dock.vue'
import DrawerComparison from '@/comparisons/Drawer.vue'
import DynamicDialogComparison from '@/comparisons/DynamicDialog.vue'
import EditorComparison from '@/comparisons/Editor.vue'
import FieldsetComparison from '@/comparisons/Fieldset.vue'
import FileUploadComparison from '@/comparisons/FileUpload.vue'
import FloatLabelComparison from '@/comparisons/FloatLabel.vue'
import FluidComparison from '@/comparisons/Fluid.vue'
import GalleriaComparison from '@/comparisons/Galleria.vue'
import IconFieldComparison from '@/comparisons/IconField.vue'
import IftaLabelComparison from '@/comparisons/IftaLabel.vue'
import ImageComparison from '@/comparisons/Image.vue'
import ImageCompareComparison from '@/comparisons/ImageCompare.vue'
import InplaceComparison from '@/comparisons/Inplace.vue'
import InputGroupComparison from '@/comparisons/InputGroup.vue'
import InputMaskComparison from '@/comparisons/InputMask.vue'
import InputNumberComparison from '@/comparisons/InputNumber.vue'
import InputOtpComparison from '@/comparisons/InputOtp.vue'
import InputTextComparison from '@/comparisons/InputText.vue'
import KnobComparison from '@/comparisons/Knob.vue'
import ListboxComparison from '@/comparisons/Listbox.vue'
import MegaMenuComparison from '@/comparisons/MegaMenu.vue'
import MenuComparison from '@/comparisons/Menu.vue'
import MenubarComparison from '@/comparisons/Menubar.vue'
import MessageComparison from '@/comparisons/Message.vue'
import MeterGroupComparison from '@/comparisons/MeterGroup.vue'
import MultiSelectComparison from '@/comparisons/MultiSelect.vue'
import OrderListComparison from '@/comparisons/OrderList.vue'
import OrganizationChartComparison from '@/comparisons/OrganizationChart.vue'
import PaginatorComparison from '@/comparisons/Paginator.vue'
import PanelComparison from '@/comparisons/Panel.vue'
import PanelMenuComparison from '@/comparisons/PanelMenu.vue'
import PasswordComparison from '@/comparisons/Password.vue'
import PickListComparison from '@/comparisons/PickList.vue'
import PopoverComparison from '@/comparisons/Popover.vue'
import ProgressBarComparison from '@/comparisons/ProgressBar.vue'
import ProgressSpinnerComparison from '@/comparisons/ProgressSpinner.vue'
import RadioButtonComparison from '@/comparisons/RadioButton.vue'
import RadioButtonGroupComparison from '@/comparisons/RadioButtonGroup.vue'
import RatingComparison from '@/comparisons/Rating.vue'
import ScrollPanelComparison from '@/comparisons/ScrollPanel.vue'
import ScrollTopComparison from '@/comparisons/ScrollTop.vue'
import SelectComparison from '@/comparisons/Select.vue'
import SelectButtonComparison from '@/comparisons/SelectButton.vue'
import SkeletonComparison from '@/comparisons/Skeleton.vue'
import SliderComparison from '@/comparisons/Slider.vue'
import SpeedDialComparison from '@/comparisons/SpeedDial.vue'
import SplitButtonComparison from '@/comparisons/SplitButton.vue'
import SplitterComparison from '@/comparisons/Splitter.vue'
import StepComparison from '@/comparisons/Step.vue'
import StepItemComparison from '@/comparisons/StepItem.vue'
import StepListComparison from '@/comparisons/StepList.vue'
import StepPanelComparison from '@/comparisons/StepPanel.vue'
import StepPanelsComparison from '@/comparisons/StepPanels.vue'
import StepperComparison from '@/comparisons/Stepper.vue'
import TabComparison from '@/comparisons/Tab.vue'
import TabListComparison from '@/comparisons/TabList.vue'
import TabPanelComparison from '@/comparisons/TabPanel.vue'
import TabPanelsComparison from '@/comparisons/TabPanels.vue'
import TabsComparison from '@/comparisons/Tabs.vue'
import TagComparison from '@/comparisons/Tag.vue'
import TerminalComparison from '@/comparisons/Terminal.vue'
import TextareaComparison from '@/comparisons/Textarea.vue'
import TieredMenuComparison from '@/comparisons/TieredMenu.vue'
import TimelineComparison from '@/comparisons/Timeline.vue'
import ToastComparison from '@/comparisons/Toast.vue'
import ToggleButtonComparison from '@/comparisons/ToggleButton.vue'
import ToggleSwitchComparison from '@/comparisons/ToggleSwitch.vue'
import ToolbarComparison from '@/comparisons/Toolbar.vue'
import TreeComparison from '@/comparisons/Tree.vue'
import TreeSelectComparison from '@/comparisons/TreeSelect.vue'
import TreeTableComparison from '@/comparisons/TreeTable.vue'
import VirtualScrollerComparison from '@/comparisons/VirtualScroller.vue'

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

const expandedPanels = ref<string[]>([])

const statusCounts = computed(() => ({
  ready: componentMappings.filter(m => m.status === 'ready').length,
  todo: componentMappings.filter(m => m.status === 'todo').length,
  missing: componentMappings.filter(m => m.status === 'missing').length,
}))

function getStatusColor(status: MappingStatus) {
  if (status === 'ready') return 'success'
  if (status === 'todo') return 'warning'
  return 'secondary'
}

function getStatusLabel(status: MappingStatus) {
  if (status === 'ready') return 'Ready'
  if (status === 'todo') return 'In progress'
  return 'No equivalent'
}

function scrollToComponent(id: string) {
  if (!expandedPanels.value.includes(id)) {
    expandedPanels.value = [...expandedPanels.value, id]
  }
  nextTick(() => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
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
</style>

<style>
.compare-column {
  flex: 1 1 280px;
  min-width: 0;
}
</style>
