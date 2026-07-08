import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import type { App } from 'vue'

export default {
  install (app: App) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
      },
    })
  },
}
