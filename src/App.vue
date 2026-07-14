<template>
  <v-app>
    <v-main>
      <v-container class="py-8" max-width="1200">
        <CompareView
          v-if="activeMapping"
          :mapping="activeMapping"
          @back="clearSlug"
        />

        <HomeView v-else @select="setSlug" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import { getMappingBySlug } from '@/catalog'
  import CompareView from '@/views/Compare.vue'
  import HomeView from '@/views/Home.vue'

  const activeSlug = ref<string | null>(null)

  const activeMapping = computed(() => {
    if (!activeSlug.value) return null
    return getMappingBySlug(activeSlug.value) ?? null
  })

  function setSlug (slug: string) {
    activeSlug.value = slug
    history.replaceState(null, '', `#${slug}`)
    window.scrollTo({ top: 0 })
  }

  function clearSlug () {
    activeSlug.value = null
    history.replaceState(null, '', location.pathname + location.search)
  }

  function syncFromHash () {
    const slug = location.hash.replace(/^#/, '').toLowerCase()
    if (!slug) {
      activeSlug.value = null
      return
    }

    const mapping = getMappingBySlug(slug)
    if (mapping) {
      activeSlug.value = mapping.slug
    } else {
      activeSlug.value = null
      history.replaceState(null, '', location.pathname + location.search)
    }
  }

  onMounted(() => {
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
  })

  onUnmounted(() => {
    window.removeEventListener('hashchange', syncFromHash)
  })
</script>

<style>
  .compare-column {
    flex: 1 1 280px;
    min-width: 0;
  }
</style>
