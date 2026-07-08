<template>
  <div class="pa-4 d-flex flex-column ga-4">
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
</template>

<script lang="ts" setup>
import { shallowRef, ref } from 'vue'

const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']
const items2 = ref([
  { icon: 'pi pi-pencil', },
  { icon: 'pi pi-refresh', },
  { icon: 'pi pi-trash', },
  { icon: 'pi pi-upload', },
  { icon: 'pi pi-external-link', }
])

const tab = ref('0')
const visible = ref(false)
const value = shallowRef<string>()
const selected = shallowRef<string[]>([])

const items = ref([
  {
    id: 0,
    title: 'Documents',
    children: [
      {
        id: 1,
        title: 'Work',
        children: [
          { id: 2, title: 'Expenses.doc', },
          { id: 3, title: 'Resume.doc', },
        ],
      },
      {
        id: 4,
        title: 'Home',
        children: [
          { id: 5, title: 'Invoices.txt', },
        ],
      },
    ],
  }
])

const items4 = ref([
  {
    title: 'Electronics',
    value: 0,
    props: {
      prependIcon: 'prime:home'
    }
  },
  {
    title: 'Computer',
    value: 1,
    props: {
      prependIcon: 'prime:home'
    }
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
                  prependIcon: 'prime:stop'
                },
              },
              {
                title: 'Paid',
                props: {
                  prependIcon: 'prime:check-circle'
                },
              }
            ]
          },
          {
            title: 'Clients',
            props: {
              prependIcon: 'prime:users'
            },
          }
        ]
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
              prependIcon: 'prime:image'
            },
          }
        ]
      }
    ]
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
          prependIcon: 'prime:cloud-upload'
        },
      },
      {
        title: 'Download',
        props: {
          prependIcon: 'prime:cloud-download'
        },
      },
      {
        title: 'Sync',
        props: {
          prependIcon: 'prime:refresh'
        },
      }
    ]
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
          prependIcon: 'prime:mobile'
        },
      },
      {
        title: 'Desktop',
        props: {
          prependIcon: 'prime:desktop'
        },
      },
      {
        title: 'Tablet',
        props: {
          prependIcon: 'prime:tablet'
        },
      }
    ]
  }
]);


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
function showToast(severity: string) {
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
