/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import 'vuetify/styles'
import '@/styles/overrides/slider.scss'
import '@/styles/overrides/switch.scss'
import '@/styles/overrides/timeline.scss'
import '@/styles/overrides/treeview.scss'
import '@/styles/overrides/stepper.scss'
import '@/styles/overrides/tabs.scss'
import { 
  VAutocomplete, 
  VCheckbox,
  VColorPicker, 
  VDatePicker, 
  VNumberInput, 
  VOtpInput,
  VTextField,
  VList,
  VSelect,
  VRadio,
  VRadioGroup,
  VRating,
  VBtnToggle,
  VSlider,
  VTextarea,
  VSwitch,
  VBtn,
  VSpeedDial,
  VDataTable,
  VDataIterator,
  VPagination,
  VTimeline,
  VTreeview,
  VVirtualScroll,
  VExpansionPanels,
  VCard,
  VDivider,
  VLazy,
  VStepper,
  VTabs,
  VToolbar,
  VConfirmEdit,
  VDialog,
  VNavigationDrawer,
  VMenu,
  VFileUpload,
  VBreadcrumbs,
  VAppBar,
  VListGroup,
  VAlert,
  VSnackbarQueue,
  VCarousel,
  VImg,
  VAvatar,
  VBadge,
  VChip,
  VProgressLinear,
  VProgressCircular,
  VSkeletonLoader,
  VDateInput,
  VExpansionPanel,
  VExpansionPanelTitle,
  VExpansionPanelText,
  VStepperHeader,
  VStepperItem,
  VStepperWindow,
  VStepperWindowItem,
  VStepperVertical,
  VTabsWindow,
  VTabsWindowItem,
  VTab,
} from 'vuetify/components'
import { VMaskInput } from 'vuetify/labs/VMaskInput'

import type { IconProps } from 'vuetify';
import type { IconifyIconProps } from '@iconify/vue';
import { Icon } from '@iconify/vue';
import { h } from 'vue';


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: {
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#10b981',
            'on-primary': '#ffffff',
            
            secondary: '#f1f5f9',
            'on-secondary': '#475569',

            surface: '#ffffff',
            'on-surface': '#334155',

            background: '#f8fafc',
            'on-background': '#334155',

            error: '#ef4444',
            'on-error': '#ffffff',

            success: '#22c55e',
            'on-success': '#ffffff',

            warning: '#f97316',
            'on-warning': '#ffffff',

            info: '#0ea5e9',
            'on-info': '#ffffff',

            'surface-bright': '#f1f5f9',
            'on-surface-bright': '#64748b',

            'surface-light': '#f8fafc',
            
            'surface-variant': '#e2e8f0',
            'on-surface-variant': '#64748b',

            'field-border-color': '#cbd5e1',
            'field-border-hover-color': '#94a3b8',
            'primary-hover': '#059669',
            'primary-activated': '#047857',
            'border-color': '#e2e8f0',
          },
          variables: {
            'border-color': '#e2e8f0',
            'border-opacity': '1',
            'high-emphasis-opacity': 1,

            // 0 1px 3px 0 rgba(0,0,0,0.1),
            // 0 1px 2px -1px rgba(0,0,0,0.1)

            'shadow-key-0': '0 0 0 0 transparent',
            'shadow-key-1': '0 0 #0000',
            'shadow-key-2': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            'shadow-key-3': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            'shadow-key-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            'shadow-key-5': '0 3px 1px -2px rgba(0, 0, 0, 0.2)',
            'shadow-ambient-0': '0 0 0 0 transparent',
            'shadow-ambient-1': '0 1px 2px 0 rgba(18, 18, 23, 0.05)',
            'shadow-ambient-2': '0 1px 2px -1px rgba(0, 0, 0, 0.1)',
            'shadow-ambient-3': '0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            'shadow-ambient-4': '0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            'shadow-ambient-5': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
          }
        },
        dark: {
          dark: true,
          colors: {
            primary: '#34d399',
            'on-primary': '#18181b',

            secondary: '#27272a',
            'on-secondary': '#d4d4d8',

            surface: '#18181b',
            'on-surface': '#ffffff',
            
            background: '#09090b',
            'on-background': '#ffffff',

            error: '#f87171',
            'on-error': '#450a0a',

            success: '#4ade80',
            'on-success': '#052e16',

            warning: '#fb923c',
            'on-warning': '#431407',

            info: '#38bdf8',
            'on-info': '#082f49',

            'surface-bright': '#27272a',

            'surface-light': '#3f3f46',
            
            'surface-variant': '#3f3f46',
            'on-surface-variant': '#a1a1aa',

            'field-border-color': '#52525b',
            'field-border-hover-color': '#71717a',
            'primary-hover': '#6ee7b7',
          },
          variables: {
            'border-color': '#3f3f46',
            'border-opacity': '1',

            'shadow-key-0': '0 0 0 0 transparent',
            'shadow-key-1': '0 0 #0000',
            'shadow-key-2': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            'shadow-key-3': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            'shadow-key-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            'shadow-key-5': '0 3px 1px -2px rgba(0, 0, 0, 0.2)',
            'shadow-ambient-0': '0 0 0 0 transparent',
            'shadow-ambient-1': '0 1px 2px 0 rgba(18, 18, 23, 0.05)',
            'shadow-ambient-2': '0 1px 2px -1px rgba(0, 0, 0, 0.1)',
            'shadow-ambient-3': '0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            'shadow-ambient-4': '0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            'shadow-ambient-5': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
          }
        }
      }
    },
    aliases: {
      AutoComplete: VAutocomplete,
      // CascadeSelect: '',
      Checkbox: VCheckbox,
      ColorPicker: VColorPicker,
      DatePicker: VDateInput,
      // Editor: '',
      // FloatLabel: '',
      // IconField: '',
      // IftaLabel: '',
      // InputGroup: '',
      InputMask: VMaskInput,
      InputNumber: VNumberInput,
      InputOtp: VOtpInput,
      InputText: VTextField,
      // Knob: '',
      Listbox: VList,
      MultiSelect: VSelect,
      Password: VTextField,
      RadioButtonGroup: VRadioGroup,
      RadioButton: VRadio,
      Rating: VRating,
      Select: VSelect,
      SelectButton: VBtnToggle,
      Slider: VSlider,
      Textarea: VTextarea,
      ToggleButton: VBtn,
      ToggleSwitch: VSwitch,
      // TreeSelect: '',
      Button: VBtn,
      SpeedDial: VSpeedDial,
      // SplitButton: '',
      DataTable: VDataTable, // TODO
      DataView: VDataIterator, // TODO
      // OrderList: '',
      // OrganizationChart: '',
      Paginator: VPagination,
      // PickList: '',
      Timeline: VTimeline,
      Tree: VTreeview, // TODO
      // TreeTable: '',
      VirtualScroller: VVirtualScroll,
      Accordion: VExpansionPanels,
      AccordionPanel: VExpansionPanel,
      AccordionHeader: VExpansionPanelTitle,
      AccordionContent: VExpansionPanelText,
      Card: VCard,
      DeferredContent: VLazy,
      Divider: VDivider,
      // Fieldset: '',
      // Panel: '',
      // ScrollPanel: '',
      // Splitter: '',
      Stepper: VStepper,
      StepList: VStepperHeader,
      Step: VStepperItem,
      StepPanels: VStepperWindow,
      StepPanel: VStepperWindowItem,
      StepItem: VStepperVertical,
      
      Tabs: VTabs,
      // TabList
      Tab: VTab,
      TabPanels: VTabsWindow,
      TabPanel: VTabsWindowItem,
      Toolbar: VToolbar,
      ConfirmDialog: VConfirmEdit,
      // ConfirmPopup: '',
      Dialog: VDialog,
      Drawer: VNavigationDrawer,
      // DynamicDialog: '',
      Popover: VMenu,
      FileUpload: VFileUpload, // TODO
      



      Breadcrumb: VBreadcrumbs,

      
      // ContextMenu: '',
      // Dock: '',
      Menu: VMenu,
      Menubar: VAppBar,
      // MegaMenu: '',
      PanelMenu: VListGroup,
      // TieredMenu: '',
      // Chart: '',
      Message: VAlert,
      Toast: VSnackbarQueue,
      Carousel: VCarousel,
      // Galleria: '',
      Image: VImg,
      // ImageCompare: '',
      Avatar: VAvatar,
      Badge: VBadge,
      // BlockUI: '',
      Chip: VChip,
      // Fluid: '',
      // Inplace: '',
      MeterGroup: VProgressLinear,
      ProgressBar: VProgressLinear,
      ProgressSpinner: VProgressCircular,
      // ScrollTop: '',
      Skeleton: VSkeletonLoader,
      Tag: VChip,
      // Terminal: '',
    },
    defaults: {
      global: {
        ripple: false,
      },
      VField: {
        rounded: 'md',
        hideDetails: 'auto',
        class: 'elevation-1',
      },
      AutoComplete: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
        menuIcon: null,
        // menu: true,
        menuProps: {
          offset: 2,
          contentClass: 'rounded-md border',
        },
        VMenu: {
          VSheet: {
            VList: {
              border: false,
              class: 'pa-1',
              density: 'tiny',
              VListItem: {
                class: 'px-2.5',
                rounded: 'sm',
              }
            }
          }
        }
      },
      VAutocomplete: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
        menuIcon: null,
        // menu: true,
        menuProps: {
          offset: 2,
          contentClass: 'rounded-md border',
        },
        VMenu: {
          VSheet: {
            VList: {
              border: false,
              class: 'pa-1',
              density: 'tiny',
              VListItem: {
                class: 'px-2.5',
                rounded: 'sm',
              }
            }
          }
        }
      },
      DatePicker: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        prependIcon: null,
        placeholder: '',
        border: true,
        controlVariant: 'modal',
        weekdayFormat: 'short',
        controlHeight: 40, 
        menuProps: {
          offset: 2,
          minWidth: '100%',
        },
        pickerProps: {
          color: 'primary',
          rounded: 'md',
          width: '100%',
        }
      },
      VDateInput: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        prependIcon: null,
        placeholder: '',
        border: true,
        controlVariant: 'modal',
        weekdayFormat: 'short',
        controlHeight: 40, 
        menuProps: {
          offset: 2,
          minWidth: '100%',
        },
        pickerProps: {
          color: 'primary',
          rounded: 'md',
          width: '100%',
        }
      },
      InputMask: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      VMaskInput: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      InputNumber: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
        controlVariant: 'hidden',
      },
      VNumberInput: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
        controlVariant: 'hidden',
      },
      InputText: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      VTextField: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      InputOtp: {
        rounded: 'md',
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        baseColor: 'field-border-color',
        color: 'surface',
        persistentPlaceholder: true,
        length: 4,
        width: '175',
        class: 'justify-start'
      },
      VOtpInput: {
        rounded: 'md',
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        baseColor: 'field-border-color',
        color: 'surface',
        persistentPlaceholder: true,
        length: 4,
      },
      Textarea: {
        hideDetails: 'auto',
        rows: 3,
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      VTextarea: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      Select: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
        // menu: true,
        menuProps: {
          offset: 2,
          contentClass: 'rounded-md border',
        },
        VMenu: {
          VSheet: {
            VList: {
              border: false,
            },
          },
        },
      },
      VSelect: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
        // menu: true,
        menuProps: {
          offset: 2,
          contentClass: 'rounded-md border',
        },
        VMenu: {
          VSheet: {
            VList: {
              border: false,
            },
          },
        },
      },
      VCombobox: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      Checkbox: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      VCheckboxBtn: {
        density: 'comfortable',
        VIcon: {
          size: 'large'
        }
      },
      RadioButton: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
        VIcon: {
          size: 'large'
        }
      },
      VRadio: {
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
        VIcon: {
          size: 'large'
        }
      },
      ColorPicker: {
        width: '193',
        canvasHeight: '166',
        hideInputs: true,
        hideEyeDropper: true,
        mode: 'hex',
        dotSize: 8,
        VSlider: {
          rounded: '0',
          trackSize: 17,
        }
      },
      Listbox: {
        border: 'sm field-border-color',
        rounded: 'md',
        elevation: 1,
        class: 'pa-1',
        maxHeight: '14rem',
        density: 'tiny',
        color: 'primary',
        VListItem: {
          rounded: 'sm',
        }
      },
      VList: {
        border: 'sm field-border-color',
        rounded: 'md',
        elevation: 1,
        class: 'pa-1',
        maxHeight: '14rem',
        density: 'tiny',
        color: 'primary',
        VListItem: {
          rounded: 'sm',
        }
      },
      MultiSelect: {
        multiple: true,
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        itemColor: 'on-surface',
        persistentPlaceholder: true,
        menuProps: {
          offset: 2,
          contentClass: 'rounded-md border'
        },
        VMenu: {
          VSheet: {
            VList: {
              border: false,
              VListItem: {
                style: '--v-activated-opacity: 0',
                VCheckboxBtn: {
                  color: 'primary',
                  class: 'mr-1.5',
                }
              }
            },
          },
        },
      },
      Rating: {
        density: 'tiny',
        activeColor: 'primary',
        color: 'secondary',
        size: 'small',
        class: 'ga-0.5',
        hover: true,
        clearable: true,
      },
      VRating: {
        density: 'tiny',
        activeColor: 'primary',
        color: 'secondary',
        size: 'small',
        class: 'ga-0.5',
        hover: true,
        clearable: true,
      },
      SelectButton: {
        class: "pa-1 bg-surface-bright",
        style: 'width: fit-content;',
        baseColor: "surface-bright",
        color: "surface",
        rounded: "md",
        border: 'sm surface-bright',
        selectedClass: 'elevation-1',
        density: "tiny",
        VBtn: {
          rounded: "md",
          minWidth: '0',
          class: "text-body-large font-weight-medium flex-1-1-0 text-truncate",
        }
      },
      VBtnToggle: {
        class: "pa-1 bg-surface-bright",
        style: 'width: fit-content;',
        baseColor: "surface-bright",
        color: "surface",
        rounded: "md",
        border: 'sm surface-bright',
        selectedClass: 'elevation-1',
        density: "tiny",
        VBtn: {
          rounded: "md",
          minWidth: '0',
          class: "text-body-large font-weight-medium flex-1-1-0 text-truncate",
        }
      },
      Slider: {
        class: 'aura-slider',
        trackColor: 'surface-variant',
        trackFillColor: 'primary',
        trackSize: 3,
        thumbColor: 'surface-variant',
        elevation: 0,
        hideDetails: 'auto',
        density: 'tiny',
      },
      VSlider: {
        class: 'aura-slider',
        trackColor: 'surface-variant',
        trackFillColor: 'primary',
        trackSize: 3,
        thumbColor: 'surface-variant',
        elevation: 0,
        hideDetails: 'auto',
        density: 'tiny',
      },
      ToggleButton: {
        text: 'No',
        variant: 'flat',
        color: 'surface-bright',
        size: 'large',
        density: 'compact',
      },
      ToggleSwitch: {
        inset: true,
        density: 'tiny',
        hideDetails: 'auto',
        color: 'primary',
        baseColor: 'field-border-color',
        class: 'aura-switch',
      },
      VSwitch: {
        inset: true,
        density: 'tiny',
        hideDetails: 'auto',
        color: 'primary',
        baseColor: 'field-border-color',
        class: 'aura-switch',
      },
      Button: {
        color: 'primary',
        variant: 'flat',
        rounded: 'md',
        size: 'large',
        density: 'compact',
      },
      // VBtn: {
      //   color: 'primary',
      //   variant: 'flat',
      //   rounded: 'md',
      //   size: 'large',
      //   density: 'compact',
      // },
      SpeedDial: {
        location: 'top center',
        modelValue: true,
        activatorProps: {
          rounded: 'circle',
          variant: 'flat',
          size: 'large',
          density: 'compact',
          color: 'primary',
        },
        VMenu: {
          VBtn: {
            color: 'surface-bright',
            size: 'x-small',
            density: 'comfortable',
          }
        }
      },

      Paginator: {
        size: 'large',
        density: 'compact',
        rounded: 'circle',
        activeColor: 'primary',
        showFirstLastPage: true,
        VPaginationBtn: {
          class: 'on-surface-variant',
        }
      },
      VPagination: {
        size: 'large',
        density: 'compact',
        rounded: 'circle',
        activeColor: 'primary',
        showFirstLastPage: true,
        VPaginationBtn: {
          class: 'on-surface-variant',
        }
      },
      Timeline: {
        class: 'aura-timeline',
        side: 'end',
        align: 'start',
        truncateLine: 'both',
        dotColor: 'primary',
        size: '16',
      },
      VTimeline: {
        class: 'aura-timeline',
        side: 'end',
        align: 'start',
        truncateLine: 'both',
        dotColor: 'primary',
        size: '16',
      },

      Tree: {
        class: 'aura-treeview',
        density: 'tiny',
        elevation: 0,
        VTreeviewItem: {
          link: false,
        },
      },

      Card: {
        elevation: 2,
        rounded: 'xl',
      },
      VCard: {
        elevation: 2,
        rounded: 'xl',
      },

      Divider: {
        class: 'my-3.5',
        color: 'border-color',
      },
      VDivider: {
        class: 'my-3.5',
        color: 'border-color',
      },

      Stepper: {
        class: 'aura-stepper',
        hideActions: true,
        editable: true,
        nonLinear: true,
        editIcon: false,
        VDivider: {
          thickness: 2,
        }
      },
      VStepper: {
        class: 'aura-stepper',
        hideActions: true,
        editable: true,
        nonLinear: true,
        editIcon: false,
        VDivider: {
          thickness: 2,
        }
      },
      StepList: {
        class: 'elevation-0'
      },
      VStepperHeader: {
        class: 'elevation-0'
      },

      Tabs: {
        class: 'aura-tabs',
        color: 'primary',
      },
      VTabs: {
        class: 'aura-tabs',
        color: 'primary',
      },
      TabPanels: {
        class: 'aura-tab-panels',
      },
      VTabsWindow: {
        class: 'aura-tab-panels',
      },

      Breadcrumb: {
        divider: '›',
        color: 'on-surface-variant',
        bgColor: 'surface',
        rounded: 'md',
      },
      VBreadcrumbs: {
        divider: '›',
        color: 'on-surface-variant',
        bgColor: 'surface',
        rounded: 'md',
      },

      Toolbar: {
        color: 'surface',
        border: 'sm border-color',
        rounded: 'md',
        density: 'compact',
        height: 56,
      },
      VToolbar: {
        color: 'surface',
        border: 'sm border-color',
        rounded: 'md',
        density: 'compact',
        height: 56,
      },

      Dialog: {
        scrim: false,
        contentClass: 'justify-center align-center'
      },
      VDialog: {
        scrim: false,
        contentClass: 'justify-center align-center'
      },

      Popover: {
        closeOnContentClick: false,
      },




      Password: {
        type: 'password',
        hideDetails: 'auto',
        variant: 'outlined',
        density: 'tiny',
        bgColor: 'surface',
        baseColor: 'field-border-color',
        color: 'primary',
        persistentPlaceholder: true,
      },
      Accordion: {
        variant: 'accordion',
        AccordionPanel: {
          hover: false,
          elevation: 0,
        },
        VExpansionPanel: {
          hover: false,
          elevation: 0,
        },
        AccordionHeader: {
          class: 'font-weight-semibold bg-backgorund on-surface-variant pa-4',
          VIcon: {
            size: 'large'
          }
        },
        VExpansionPanelTitle: {
          class: 'font-weight-semibold bg-backgorund on-surface-variant pa-4',
          VIcon: {
            size: 'large'
          }
        },
      },
      Toast: {
        location: 'top end',
      },
      ProgressSpinner: {
        indeterminate: true,
      },
      Tag: {
        variant: 'tonal',
        label: true
      }
    },
    icons: {
      defaultSet: 'custom',
      aliases: {
        collapse: 'prime:angle-up',
        complete: 'prime:check',
        cancel: 'prime:times-circle',
        close: 'prime:times',
        delete: 'prime:times-circle',
        clear: 'prime:times-circle',
        success: 'prime:check-circle',
        info: 'prime:info-circle',
        warning: 'prime:exclamation-triangle',
        error: 'prime:times-circle',
        prev: 'prime:chevron-left',
        next: 'prime:chevron-right',
        checkboxOn: 'prime:check',
        checkboxOff: 'prime:stop',
        checkboxIndeterminate: 'prime:minus',
        delimiter: 'prime:circle-fill',
        sortAsc: 'prime:arrow-up',
        sortDesc: 'prime:arrow-down',
        expand: 'prime:chevron-down',
        menu: 'prime:bars',
        subgroup: 'prime:chevron-down',
        dropdown: 'prime:chevron-down',
        radioOn: 'prime:circle-on',
        radioOff: 'prime:circle-off',
        edit: 'prime:pencil',
        ratingEmpty: 'prime:star',
        ratingFull: 'prime:star-fill',
        ratingHalf: 'prime:star-half-fill',
        loading: 'prime:spinner',
        first: 'prime:angle-double-left',
        last: 'prime:angle-double-right',
        unfold: 'prime:arrows-h',
        file: 'prime:paperclip',
        plus: 'prime:plus',
        minus: 'prime:minus',
        calendar: 'prime:calendar',
        treeviewCollapse: 'prime:chevron-down',
        treeviewExpand: 'prime:chevron-right',
        tableGroupCollapse: 'prime:chevron-down',
        tableGroupExpand: 'prime:chevron-right',
        eyeDropper: 'prime:palette',
        upload: 'prime:upload',
        color: 'prime:palette',
        command: '',
        ctrl: '',
        space: '',
        shift: '',
        alt: '',
        enter: 'prime:arrow-down-left',
        arrowup: 'prime:arrow-up',
        arrowdown: 'prime:arrow-down',
        arrowleft: 'prime:arrow-left',
        arrowright: 'prime:arrow-right',
        backspace: 'prime:delete-left',
        play: 'prime:play',
        pause: 'prime:pause',
        fullscreen: 'prime:window-maximize',
        fullscreenExit: 'prime:window-minimize',
        volumeHigh: 'prime:volume-up',
        volumeMedium: 'prime:volume-down',
        volumeLow: 'prime:volume-down',
        volumeOff: 'prime:volume-off',
        ellipsis: 'prime:ellipsis-h',
      },
      sets: {
        custom: {
          component: (props: IconProps) => {
            return h(Icon, {
              ...props,
            } as IconifyIconProps);
          },
        },
      },
    },
  },
})
