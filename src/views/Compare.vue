<template>
  <div>
    <div class="mb-6">
      <v-btn class="mb-4 px-0" prepend-icon="prime:chevron-left" variant="text" @click="emit('back')">
        Back to catalog
      </v-btn>

      <div class="d-flex align-center flex-wrap ga-2 mb-1">
        <h1 class="text-h5 font-weight-bold">{{ mapping.primevue }}</h1>
        <span class="text-medium-emphasis">→</span>
        <span class="text-h6 text-medium-emphasis">{{ mapping.vuetify ?? '—' }}</span>

        <v-chip :color="getStatusColor(mapping.status)" size="small" variant="flat">
          {{ getStatusLabel(mapping.status) }}
        </v-chip>
      </div>
    </div>

    <v-skeleton-loader v-if="pending" type="image" />

    <v-alert v-else-if="error" density="compact" type="error">
      Failed to load comparison.
    </v-alert>

    <component :is="demo" v-else-if="demo" />
  </div>
</template>

<script lang="ts" setup>
import {
  type Component,
  onMounted,
  ref,
  shallowRef,
  watch,
} from 'vue'
import {
  type ComponentMapping,
  getStatusColor,
  getStatusLabel,
} from '@/catalog'

const props = defineProps<{
  mapping: ComponentMapping
}>()

const emit = defineEmits<{
  back: []
}>()

const demo = shallowRef<Component | null>(null)
const pending = ref(true)
const error = ref(false)

async function loadDemo() {
  pending.value = true
  error.value = false
  demo.value = null

  try {
    const mod = await props.mapping.load()
    demo.value = mod.default
  } catch {
    error.value = true
  } finally {
    pending.value = false
  }
}

onMounted(loadDemo)
watch(() => props.mapping.slug, loadDemo)
</script>
