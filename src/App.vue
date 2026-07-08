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
            <!-- AutoComplete -->
            <v-expansion-panel id="component-autocomplete" value="component-autocomplete">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>AutoComplete</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VAutocomplete</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvAutoComplete />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <AutoComplete />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- CascadeSelect -->
            <v-expansion-panel id="component-cascadeselect" value="component-cascadeselect">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>CascadeSelect</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvCascadeSelect />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Checkbox -->
            <v-expansion-panel id="component-checkbox" value="component-checkbox">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Checkbox</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VCheckbox</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvCheckbox />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Checkbox />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ColorPicker -->
            <v-expansion-panel id="component-colorpicker" value="component-colorpicker">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ColorPicker</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VColorPicker</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvColorPicker />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <ColorPicker />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- DatePicker -->
            <v-expansion-panel id="component-datepicker" value="component-datepicker">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>DatePicker</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VDateInput</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvDatePicker />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <DatePicker />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Editor -->
            <v-expansion-panel id="component-editor" value="component-editor">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Editor</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <span class="text-medium-emphasis text-caption">Requires optional dependency (quill / chart.js)</span>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- FloatLabel -->
            <v-expansion-panel id="component-floatlabel" value="component-floatlabel">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>FloatLabel</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvFloatLabel>
                      <PvInputText id="float-demo" v-model="basicValue" />
                      <label for="float-demo">Label</label>
                    </PvFloatLabel>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- IconField -->
            <v-expansion-panel id="component-iconfield" value="component-iconfield">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>IconField</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvIconField>
                      <PvInputText v-model="basicValue" />
                    </PvIconField>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- IftaLabel -->
            <v-expansion-panel id="component-iftalabel" value="component-iftalabel">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>IftaLabel</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvIftaLabel>
                      <PvInputText id="ifta-demo" v-model="basicValue" />
                      <label for="ifta-demo">Label</label>
                    </PvIftaLabel>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- InputGroup -->
            <v-expansion-panel id="component-inputgroup" value="component-inputgroup">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>InputGroup</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvInputGroup>
                      <PvInputGroupAddon>$</PvInputGroupAddon>
                      <PvInputText />
                    </PvInputGroup>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- InputMask -->
            <v-expansion-panel id="component-inputmask" value="component-inputmask">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>InputMask</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VMaskInput</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvInputMask mask="99-999999" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <InputMask mask="##-######" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- InputNumber -->
            <v-expansion-panel id="component-inputnumber" value="component-inputnumber">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>InputNumber</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VNumberInput</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvInputNumber />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <InputNumber />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- InputOtp -->
            <v-expansion-panel id="component-inputotp" value="component-inputotp">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>InputOtp</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VOtpInput</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvInputOtp />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <InputOtp />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- InputText -->
            <v-expansion-panel id="component-inputtext" value="component-inputtext">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>InputText</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTextField</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvInputText />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <InputText />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Knob -->
            <v-expansion-panel id="component-knob" value="component-knob">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Knob</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvKnob v-model="knobValue" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Listbox -->
            <v-expansion-panel id="component-listbox" value="component-listbox">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Listbox</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VList</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvListbox v-model="basicValue" :options="basicOptions" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Listbox :items="basicOptions" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- MultiSelect -->
            <v-expansion-panel id="component-multiselect" value="component-multiselect">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>MultiSelect</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VSelect</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvMultiSelect v-model="basicValue" :options="basicOptions" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <MultiSelect v-model="basicValue" :items="basicOptions" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Password -->
            <v-expansion-panel id="component-password" value="component-password">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Password</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTextField</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvPassword />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Password />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- RadioButtonGroup -->
            <v-expansion-panel id="component-radiobuttongroup" value="component-radiobuttongroup">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>RadioButtonGroup</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VRadioGroup</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvRadioButtonGroup v-model="basicValue">
                      <PvRadioButton value="a" />
                    </PvRadioButtonGroup>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <RadioButtonGroup v-model="basicValue">
                      <RadioButton value="a" />
                    </RadioButtonGroup>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- RadioButton -->
            <v-expansion-panel id="component-radiobutton" value="component-radiobutton">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>RadioButton</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VRadio</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvRadioButtonGroup v-model="basicValue">
                      <PvRadioButton value="a" />
                    </PvRadioButtonGroup>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <RadioButtonGroup v-model="basicValue">
                      <RadioButton value="a" />
                    </RadioButtonGroup>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Rating -->
            <v-expansion-panel id="component-rating" value="component-rating">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Rating</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VRating</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvRating />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Rating />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Select -->
            <v-expansion-panel id="component-select" value="component-select">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Select</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VSelect</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvSelect v-model="basicValue" :options="basicOptions" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Select v-model="basicValue" :items="basicOptions" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- SelectButton -->
            <v-expansion-panel id="component-selectbutton" value="component-selectbutton">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>SelectButton</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VBtnToggle</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvSelectButton v-model="basicValue" :options="basicOptions" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <SelectButton v-model="basicValue">
                      <Button v-for="option in basicOptions" :key="option" :text="option" :value="option" />
                    </SelectButton>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Slider -->
            <v-expansion-panel id="component-slider" value="component-slider">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Slider</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VSlider</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvSlider />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Slider />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Textarea -->
            <v-expansion-panel id="component-textarea" value="component-textarea">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Textarea</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTextarea</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvTextarea />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Textarea />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ToggleButton -->
            <v-expansion-panel id="component-togglebutton" value="component-togglebutton">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ToggleButton</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VBtn</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvToggleButton :model-value="false" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <ToggleButton />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ToggleSwitch -->
            <v-expansion-panel id="component-toggleswitch" value="component-toggleswitch">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ToggleSwitch</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VSwitch</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvToggleSwitch />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <ToggleSwitch />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- TreeSelect -->
            <v-expansion-panel id="component-treeselect" value="component-treeselect">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>TreeSelect</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvTreeSelect v-model="basicValue" :options="basicTree" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Button -->
            <v-expansion-panel id="component-button" value="component-button">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Button</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VBtn</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvButton>Button</PvButton>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Button text="Button" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- SpeedDial -->
            <v-expansion-panel id="component-speeddial" value="component-speeddial">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>SpeedDial</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VSpeedDial</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvSpeedDial :model="[{ icon: 'pi pi-pencil' }]" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <SpeedDial>
                      <template #activator="{ props }">
                        <v-fab v-bind="props" icon="prime:plus" />
                      </template>

                      <v-btn icon="prime:pencil" />
                    </SpeedDial>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- SplitButton -->
            <v-expansion-panel id="component-splitbutton" value="component-splitbutton">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>SplitButton</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvSplitButton label="Save" :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- DataTable -->
            <v-expansion-panel id="component-datatable" value="component-datatable">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>DataTable</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VDataTable</span>
                  <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvDataTable :value="basicTableData">
                      <PvColumn field="name" header="Name" />
                    </PvDataTable>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <DataTable :headers="[{ title: 'Name', key: 'name' }]" :items="basicTableData" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- DataView -->
            <v-expansion-panel id="component-dataview" value="component-dataview">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>DataView</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VDataIterator</span>
                  <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvDataView :value="basicTableData">
                      <template #list="{ items }">
                        <div v-for="item in items" :key="item.name">{{ item.name }}</div>
                      </template>
                    </PvDataView>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <DataView :items="basicTableData">
                      <template #default="{ items }">
                        <div v-for="item in items" :key="item.raw.name">{{ item.raw.name }}</div>
                      </template>
                    </DataView>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- OrderList -->
            <v-expansion-panel id="component-orderlist" value="component-orderlist">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>OrderList</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvOrderList v-model="orderListValue" data-key="label">
                      <template #option="{ option }">{{ option.label }}</template>
                    </PvOrderList>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- OrganizationChart -->
            <v-expansion-panel id="component-organizationchart" value="component-organizationchart">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>OrganizationChart</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvOrganizationChart :value="orgChartValue" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Paginator -->
            <v-expansion-panel id="component-paginator" value="component-paginator">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Paginator</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VPagination</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvPaginator :rows="10" :total-records="50" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Paginator :length="5" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- PickList -->
            <v-expansion-panel id="component-picklist" value="component-picklist">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>PickList</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvPickList v-model="pickListValue" data-key="label">
                      <template #option="{ option }">{{ option.label }}</template>
                    </PvPickList>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Timeline -->
            <v-expansion-panel id="component-timeline" value="component-timeline">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Timeline</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTimeline</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvTimeline :value="basicTimeline">
                      <template #content="{ item }">{{ item.status }}</template>
                    </PvTimeline>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <Timeline>
                      <v-timeline-item>Step</v-timeline-item>
                    </Timeline>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Tree -->
            <v-expansion-panel id="component-tree" value="component-tree">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Tree</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTreeview</span>
                  <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvTree :value="basicTree" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Tree :items="vuetifyTree" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- TreeTable -->
            <v-expansion-panel id="component-treetable" value="component-treetable">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>TreeTable</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvTreeTable :value="basicTree">
                      <PvColumn expander field="label" header="Label" />
                    </PvTreeTable>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- VirtualScroller -->
            <v-expansion-panel id="component-virtualscroller" value="component-virtualscroller">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>VirtualScroller</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VVirtualScroll</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvVirtualScroller :item-size="32" :items="basicOptions" style="height: 120px">
                      <template #item="{ item }">
                        <div>{{ item }}</div>
                      </template>
                    </PvVirtualScroller>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <VirtualScroller :height="120" :items="basicOptions">
                      <template #default="{ item }">
                        <div>{{ item }}</div>
                      </template>
                    </VirtualScroller>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Accordion -->
            <v-expansion-panel id="component-accordion" value="component-accordion">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Accordion</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VExpansionPanels</span>
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

            <!-- AccordionPanel -->
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

            <!-- AccordionHeader -->
            <v-expansion-panel id="component-accordionheader" value="component-accordionheader">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>AccordionHeader</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VExpansionPanelTitle</span>
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

            <!-- AccordionContent -->
            <v-expansion-panel id="component-accordioncontent" value="component-accordioncontent">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>AccordionContent</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VExpansionPanelText</span>
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

            <!-- Card -->
            <v-expansion-panel id="component-card" value="component-card">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Card</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VCard</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvCard>
                      <template #title>Card</template>
                      <template #content>Content</template>
                    </PvCard>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Card text="Content" title="Card" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- DeferredContent -->
            <v-expansion-panel id="component-deferredcontent" value="component-deferredcontent">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>DeferredContent</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VLazy</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvDeferredContent>
                      <div>Deferred content</div>
                    </PvDeferredContent>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <DeferredContent>
                      <div>Deferred content</div>
                    </DeferredContent>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Divider -->
            <v-expansion-panel id="component-divider" value="component-divider">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Divider</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VDivider</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvDivider />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Divider />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Fieldset -->
            <v-expansion-panel id="component-fieldset" value="component-fieldset">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Fieldset</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvFieldset legend="Legend">Content</PvFieldset>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Panel -->
            <v-expansion-panel id="component-panel" value="component-panel">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Panel</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvPanel header="Header">Content</PvPanel>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ScrollPanel -->
            <v-expansion-panel id="component-scrollpanel" value="component-scrollpanel">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ScrollPanel</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvScrollPanel style="width: 100%; height: 120px">Content</PvScrollPanel>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Splitter -->
            <v-expansion-panel id="component-splitter" value="component-splitter">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Splitter</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvSplitter style="height: 120px">
                      <PvSplitterPanel>Left</PvSplitterPanel>
                      <PvSplitterPanel>Right</PvSplitterPanel>
                    </PvSplitter>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Stepper -->
            <v-expansion-panel id="component-stepper" value="component-stepper">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Stepper</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VStepper</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvStepper value="1">
                      <PvStepList>
                        <PvStep value="1">Step</PvStep>
                      </PvStepList>

                      <PvStepPanels>
                        <PvStepPanel value="1">Content</PvStepPanel>
                      </PvStepPanels>
                    </PvStepper>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Stepper :items="['Step']" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- StepList -->
            <v-expansion-panel id="component-steplist" value="component-steplist">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>StepList</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VStepperHeader</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvStepper value="1">
                      <PvStepList>
                        <PvStep value="1">Step</PvStep>
                      </PvStepList>

                      <PvStepPanels>
                        <PvStepPanel value="1">Content</PvStepPanel>
                      </PvStepPanels>
                    </PvStepper>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Stepper :items="['Step']" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Step -->
            <v-expansion-panel id="component-step" value="component-step">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Step</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VStepperItem</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvStepper value="1">
                      <PvStepList>
                        <PvStep value="1">Step</PvStep>
                      </PvStepList>

                      <PvStepPanels>
                        <PvStepPanel value="1">Content</PvStepPanel>
                      </PvStepPanels>
                    </PvStepper>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Stepper :items="['Step']" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- StepPanels -->
            <v-expansion-panel id="component-steppanels" value="component-steppanels">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>StepPanels</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VStepperWindow</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvStepper value="1">
                      <PvStepList>
                        <PvStep value="1">Step</PvStep>
                      </PvStepList>

                      <PvStepPanels>
                        <PvStepPanel value="1">Content</PvStepPanel>
                      </PvStepPanels>
                    </PvStepper>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Stepper :items="['Step']" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- StepPanel -->
            <v-expansion-panel id="component-steppanel" value="component-steppanel">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>StepPanel</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VStepperWindowItem</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvStepper value="1">
                      <PvStepList>
                        <PvStep value="1">Step</PvStep>
                      </PvStepList>

                      <PvStepPanels>
                        <PvStepPanel value="1">Content</PvStepPanel>
                      </PvStepPanels>
                    </PvStepper>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Stepper :items="['Step']" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- StepItem -->
            <v-expansion-panel id="component-stepitem" value="component-stepitem">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>StepItem</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VStepperVertical</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvStepper value="1">
                      <PvStepItem value="1">
                        <PvStep>Step</PvStep>
                        <PvStepPanel>Content</PvStepPanel>
                      </PvStepItem>
                    </PvStepper>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Stepper :items="['Step']" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Tabs -->
            <v-expansion-panel id="component-tabs" value="component-tabs">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Tabs</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTabs</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvTabs value="0">
                      <PvTabList>
                        <PvTab value="0">Tab</PvTab>
                      </PvTabList>

                      <PvTabPanels>
                        <PvTabPanel value="0">Content</PvTabPanel>
                      </PvTabPanels>
                    </PvTabs>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <Tabs v-model="tab">
                      <Tab value="0">Tab</Tab>
                    </Tabs>

                    <TabPanels v-model="tab">
                      <TabPanel value="0">Content</TabPanel>
                    </TabPanels>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- TabList -->
            <v-expansion-panel id="component-tablist" value="component-tablist">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>TabList</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvTabs value="0">
                      <PvTabList>
                        <PvTab value="0">Tab</PvTab>
                      </PvTabList>

                      <PvTabPanels>
                        <PvTabPanel value="0">Content</PvTabPanel>
                      </PvTabPanels>
                    </PvTabs>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Tab -->
            <v-expansion-panel id="component-tab" value="component-tab">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Tab</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTab</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvTabs value="0">
                      <PvTabList>
                        <PvTab value="0">Tab</PvTab>
                      </PvTabList>

                      <PvTabPanels>
                        <PvTabPanel value="0">Content</PvTabPanel>
                      </PvTabPanels>
                    </PvTabs>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <Tabs v-model="tab">
                      <Tab value="0">Tab</Tab>
                    </Tabs>

                    <TabPanels v-model="tab">
                      <TabPanel value="0">Content</TabPanel>
                    </TabPanels>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- TabPanels -->
            <v-expansion-panel id="component-tabpanels" value="component-tabpanels">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>TabPanels</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTabsWindow</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvTabs value="0">
                      <PvTabList>
                        <PvTab value="0">Tab</PvTab>
                      </PvTabList>

                      <PvTabPanels>
                        <PvTabPanel value="0">Content</PvTabPanel>
                      </PvTabPanels>
                    </PvTabs>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <Tabs v-model="tab">
                      <Tab value="0">Tab</Tab>
                    </Tabs>

                    <TabPanels v-model="tab">
                      <TabPanel value="0">Content</TabPanel>
                    </TabPanels>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- TabPanel -->
            <v-expansion-panel id="component-tabpanel" value="component-tabpanel">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>TabPanel</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VTabsWindowItem</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvTabs value="0">
                      <PvTabList>
                        <PvTab value="0">Tab</PvTab>
                      </PvTabList>

                      <PvTabPanels>
                        <PvTabPanel value="0">Content</PvTabPanel>
                      </PvTabPanels>
                    </PvTabs>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <Tabs v-model="tab">
                      <Tab value="0">Tab</Tab>
                    </Tabs>

                    <TabPanels v-model="tab">
                      <TabPanel value="0">Content</TabPanel>
                    </TabPanels>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Toolbar -->
            <v-expansion-panel id="component-toolbar" value="component-toolbar">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Toolbar</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VToolbar</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvToolbar>
                      <template #start>Toolbar</template>
                    </PvToolbar>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Toolbar />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ConfirmDialog -->
            <v-expansion-panel id="component-confirmdialog" value="component-confirmdialog">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ConfirmDialog</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VConfirmEdit</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvConfirmDialog />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <ConfirmDialog v-model="basicValue" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ConfirmPopup -->
            <v-expansion-panel id="component-confirmpopup" value="component-confirmpopup">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ConfirmPopup</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvConfirmPopup />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Dialog -->
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

            <!-- Drawer -->
            <v-expansion-panel id="component-drawer" value="component-drawer">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Drawer</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VNavigationDrawer</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvButton icon="pi pi-arrow-right" @click="drawerVisible = true" />
                    <PvDrawer v-model:visible="drawerVisible">Content</PvDrawer>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Button icon="prime:arrow-right" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- DynamicDialog -->
            <v-expansion-panel id="component-dynamicdialog" value="component-dynamicdialog">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>DynamicDialog</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvDynamicDialog />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Popover -->
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

            <!-- FileUpload -->
            <v-expansion-panel id="component-fileupload" value="component-fileupload">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>FileUpload</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VFileUpload</span>
                  <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvFileUpload mode="basic" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <FileUpload />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Breadcrumb -->
            <v-expansion-panel id="component-breadcrumb" value="component-breadcrumb">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Breadcrumb</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VBreadcrumbs</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvBreadcrumb :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Breadcrumb :items="['Home', 'Section']" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ContextMenu -->
            <v-expansion-panel id="component-contextmenu" value="component-contextmenu">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ContextMenu</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvContextMenu :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Dock -->
            <v-expansion-panel id="component-dock" value="component-dock">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Dock</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvDock :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Menu -->
            <v-expansion-panel id="component-menu" value="component-menu">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Menu</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VMenu</span>
                  <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvMenu :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <Menu>
                      <template #activator="{ props }">
                        <Button v-bind="props" text="Open" />
                      </template>

                      <v-list :items="menuItems" />
                    </Menu>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Menubar -->
            <v-expansion-panel id="component-menubar" value="component-menubar">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Menubar</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvMenubar :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- MegaMenu -->
            <v-expansion-panel id="component-megamenu" value="component-megamenu">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>MegaMenu</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvMegaMenu :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- PanelMenu -->
            <v-expansion-panel id="component-panelmenu" value="component-panelmenu">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>PanelMenu</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VList</span>
                  <v-chip color="warning" size="x-small" variant="flat">In progress</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvPanelMenu :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <PanelMenu :items="[{ title: 'Item', value: 0 }]" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- TieredMenu -->
            <v-expansion-panel id="component-tieredmenu" value="component-tieredmenu">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>TieredMenu</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvTieredMenu :model="basicItems" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Chart -->
            <v-expansion-panel id="component-chart" value="component-chart">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Chart</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <span class="text-medium-emphasis text-caption">Requires optional dependency (quill / chart.js)</span>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Message -->
            <v-expansion-panel id="component-message" value="component-message">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Message</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VAlert</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvMessage>Message</PvMessage>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Message>Message</Message>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Toast -->
            <v-expansion-panel id="component-toast" value="component-toast">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Toast</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VSnackbarQueue</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvButton label="Show" @click="showPvToast" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Button text="Show" @click="toasts = [{ title: 'Info', text: 'Message', timeout: 3000 }]" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Carousel -->
            <v-expansion-panel id="component-carousel" value="component-carousel">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Carousel</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VCarousel</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvCarousel :num-scroll="1" :num-visible="1" :value="basicSlides">
                      <template #item="{ data }">
                        <div :style="{ background: data.bg, height: '120px' }">{{ data.title }}</div>
                      </template>
                    </PvCarousel>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>

                    <Carousel>
                      <v-carousel-item>
                        <v-sheet class="d-flex align-center justify-center" color="surface-variant" :height="120">Slide</v-sheet>
                      </v-carousel-item>
                    </Carousel>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Galleria -->
            <v-expansion-panel id="component-galleria" value="component-galleria">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Galleria</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvGalleria :value="basicSlides" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Image -->
            <v-expansion-panel id="component-image" value="component-image">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Image</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VImg</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvImage alt="Image" src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" :width="120" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Image alt="Image" src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" :width="120" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ImageCompare -->
            <v-expansion-panel id="component-imagecompare" value="component-imagecompare">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ImageCompare</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvImageCompare />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Avatar -->
            <v-expansion-panel id="component-avatar" value="component-avatar">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Avatar</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VAvatar</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvAvatar label="P" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Avatar>V</Avatar>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Badge -->
            <v-expansion-panel id="component-badge" value="component-badge">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Badge</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VBadge</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvBadge value="2" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Badge content="2" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- BlockUI -->
            <v-expansion-panel id="component-blockui" value="component-blockui">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>BlockUI</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvBlockUI :blocked="true">Content</PvBlockUI>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Chip -->
            <v-expansion-panel id="component-chip" value="component-chip">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Chip</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VChip</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvChip label="Chip" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Chip text="Chip" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Fluid -->
            <v-expansion-panel id="component-fluid" value="component-fluid">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Fluid</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvFluid>
                      <PvInputText />
                    </PvFluid>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Inplace -->
            <v-expansion-panel id="component-inplace" value="component-inplace">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Inplace</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>

                    <PvInplace>
                      <template #display>View content</template>
                      <template #content>Editable content</template>
                    </PvInplace>
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- MeterGroup -->
            <v-expansion-panel id="component-metergroup" value="component-metergroup">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>MeterGroup</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VProgressLinear</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvMeterGroup :value="[{ label: 'Used', value: 15 }]" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <MeterGroup :model-value="15" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ProgressBar -->
            <v-expansion-panel id="component-progressbar" value="component-progressbar">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ProgressBar</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VProgressLinear</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvProgressBar :value="50" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <ProgressBar :model-value="50" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ProgressSpinner -->
            <v-expansion-panel id="component-progressspinner" value="component-progressspinner">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ProgressSpinner</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VProgressCircular</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvProgressSpinner />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <ProgressSpinner />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- ScrollTop -->
            <v-expansion-panel id="component-scrolltop" value="component-scrolltop">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>ScrollTop</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvScrollTop />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Skeleton -->
            <v-expansion-panel id="component-skeleton" value="component-skeleton">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Skeleton</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VSkeletonLoader</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvSkeleton />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Skeleton />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Tag -->
            <v-expansion-panel id="component-tag" value="component-tag">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Tag</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>VChip</span>
                  <v-chip color="success" size="x-small" variant="flat">Ready</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvTag value="Primary" />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <Tag text="Primary" />
                  </v-sheet>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Terminal -->
            <v-expansion-panel id="component-terminal" value="component-terminal">
              <v-expansion-panel-title>
                <div class="d-flex align-center flex-wrap ga-2">
                  <span>Terminal</span>
                  <span class="text-medium-emphasis">→</span>
                  <span>—</span>
                  <v-chip color="secondary" size="x-small" variant="flat">No equivalent</v-chip>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="d-flex flex-wrap ga-4">
                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">PrimeVue Aura</div>
                    <PvTerminal />
                  </v-sheet>

                  <v-sheet border class="pa-4 compare-column" rounded="lg">
                    <div class="text-caption text-medium-emphasis mb-3">Vuetify Blueprint</div>
                    <v-alert density="compact" type="info" variant="tonal">No Vuetify equivalent defined yet.</v-alert>
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
    Column as PvColumn,
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
    SplitterPanel as PvSplitterPanel,
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
  import { useToast } from 'primevue/usetoast'
  import { computed, nextTick, ref } from 'vue'
  import {
    VAlert,
    VAutocomplete,
    VAvatar,
    VBadge,
    VBreadcrumbs,
    VBtn,
    VBtnToggle,
    VCard,
    VCarousel,
    VCheckbox,
    VChip,
    VColorPicker,
    VConfirmEdit,
    VDataIterator,
    VDataTable,
    VDateInput,
    VDialog,
    VDivider,
    VExpansionPanel,
    VExpansionPanels,
    VFileUpload,
    VImg,
    VLazy,
    VList,
    VMenu,
    VNumberInput,
    VOtpInput,
    VPagination,
    VProgressCircular,
    VProgressLinear,
    VRadio,
    VRadioGroup,
    VRating,
    VSelect,
    VSkeletonLoader,
    VSlider,
    VSnackbarQueue,
    VSpeedDial,
    VStepper,
    VSwitch,
    VTab,
    VTabs,
    VTabsWindow,
    VTabsWindowItem,
    VTextarea,
    VTextField,
    VTimeline,
    VToolbar,
    VTreeview,
    VVirtualScroll,
  } from 'vuetify/components'
  import { VMaskInput } from 'vuetify/labs/VMaskInput'

  // The Vuetify blueprint components are registered globally as PrimeVue-style
  // aliases inside `plugins/vuetify.ts`. We rebuild the same aliases locally so
  // the template can use them as explicit, correctly typed tags while keeping
  // the Aura defaults (Vuetify resolves defaults by the component `name`).
  function aura<T> (component: T, name: string): T {
    return { ...(component as Record<string, unknown>), name, aliasName: (component as { name?: string }).name } as T
  }

  const AutoComplete = aura(VAutocomplete, 'AutoComplete')
  const Checkbox = aura(VCheckbox, 'Checkbox')
  const ColorPicker = aura(VColorPicker, 'ColorPicker')
  const DatePicker = aura(VDateInput, 'DatePicker')
  const InputMask = aura(VMaskInput, 'InputMask')
  const InputNumber = aura(VNumberInput, 'InputNumber')
  const InputOtp = aura(VOtpInput, 'InputOtp')
  const InputText = aura(VTextField, 'InputText')
  const Password = aura(VTextField, 'Password')
  const Listbox = aura(VList, 'Listbox')
  const MultiSelect = aura(VSelect, 'MultiSelect')
  const Select = aura(VSelect, 'Select')
  const RadioButtonGroup = aura(VRadioGroup, 'RadioButtonGroup')
  const RadioButton = aura(VRadio, 'RadioButton')
  const Rating = aura(VRating, 'Rating')
  const SelectButton = aura(VBtnToggle, 'SelectButton')
  const Slider = aura(VSlider, 'Slider')
  const Textarea = aura(VTextarea, 'Textarea')
  const ToggleButton = aura(VBtn, 'ToggleButton')
  const ToggleSwitch = aura(VSwitch, 'ToggleSwitch')
  const Button = aura(VBtn, 'Button')
  const SpeedDial = aura(VSpeedDial, 'SpeedDial')
  const DataTable = aura(VDataTable, 'DataTable')
  const DataView = aura(VDataIterator, 'DataView')
  const Paginator = aura(VPagination, 'Paginator')
  const Timeline = aura(VTimeline, 'Timeline')
  const Tree = aura(VTreeview, 'Tree')
  const VirtualScroller = aura(VVirtualScroll, 'VirtualScroller')
  const Accordion = aura(VExpansionPanels, 'Accordion')
  const AccordionPanel = aura(VExpansionPanel, 'AccordionPanel')
  const Card = aura(VCard, 'Card')
  const DeferredContent = aura(VLazy, 'DeferredContent')
  const Divider = aura(VDivider, 'Divider')
  const Stepper = aura(VStepper, 'Stepper')
  const Tabs = aura(VTabs, 'Tabs')
  const Tab = aura(VTab, 'Tab')
  const TabPanels = aura(VTabsWindow, 'TabPanels')
  const TabPanel = aura(VTabsWindowItem, 'TabPanel')
  const Toolbar = aura(VToolbar, 'Toolbar')
  const ConfirmDialog = aura(VConfirmEdit, 'ConfirmDialog')
  const Dialog = aura(VDialog, 'Dialog')
  const Popover = aura(VMenu, 'Popover')
  const Menu = aura(VMenu, 'Menu')
  const FileUpload = aura(VFileUpload, 'FileUpload')
  const Breadcrumb = aura(VBreadcrumbs, 'Breadcrumb')
  const PanelMenu = aura(VList, 'PanelMenu')
  const Message = aura(VAlert, 'Message')
  const Toast = aura(VSnackbarQueue, 'Toast')
  const Carousel = aura(VCarousel, 'Carousel')
  const Image = aura(VImg, 'Image')
  const Avatar = aura(VAvatar, 'Avatar')
  const Badge = aura(VBadge, 'Badge')
  const Chip = aura(VChip, 'Chip')
  const Tag = aura(VChip, 'Tag')
  const MeterGroup = aura(VProgressLinear, 'MeterGroup')
  const ProgressBar = aura(VProgressLinear, 'ProgressBar')
  const ProgressSpinner = aura(VProgressCircular, 'ProgressSpinner')
  const Skeleton = aura(VSkeletonLoader, 'Skeleton')

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
  const toasts = ref<any[]>([])

  const basicValue = ref<string | null>(null)
  const knobValue = ref(30)
  const tab = ref('0')
  const dialogVisible = ref(false)
  const drawerVisible = ref(false)
  const popoverRef = ref()

  const basicOptions = ['Apple', 'Banana', 'Cherry']
  const basicItems = [{ label: 'Item' }, { label: 'Item 2' }]
  const basicTree = [{ key: '0', label: 'Root', children: [{ key: '0-0', label: 'Child' }] }]
  const vuetifyTree = [{ id: 0, title: 'Root', children: [{ id: 1, title: 'Child' }] }]
  const basicSlides = [{ title: 'Slide', bg: '#eff6ff' }]
  const basicTableData = [{ name: 'Item' }]
  const basicTimeline = [{ status: 'Step' }]
  const menuItems = basicOptions.map((option, index) => ({ title: option, value: index }))
  const orderListValue = ref([{ label: 'Item' }, { label: 'Item 2' }])
  const pickListValue = ref([[{ label: 'Item' }], [{ label: 'Item 2' }]])
  const orgChartValue = { key: '0', label: 'Root', children: [{ key: '0-0', label: 'Child' }] }

  const toast = useToast()

  const statusCounts = computed(() => ({
    ready: componentMappings.filter(m => m.status === 'ready').length,
    todo: componentMappings.filter(m => m.status === 'todo').length,
    missing: componentMappings.filter(m => m.status === 'missing').length,
  }))

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
    if (!expandedPanels.value.includes(id)) {
      expandedPanels.value = [...expandedPanels.value, id]
    }
    nextTick(() => {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  function showPvToast () {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message', life: 3000 })
  }

  function togglePopover (event: Event) {
    popoverRef.value?.toggle(event)
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
