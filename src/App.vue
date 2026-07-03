<template>
  <div class="pa-4 d-flex flex-column ga-4">
    <!-- elevation-2 border rounded-md ma-10" style="width: 420px;"> -->
    Vuetify

    <!-- SpeedDial -->
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

const value = shallowRef<string>()
const selected = shallowRef<string[]>([])

</script>
