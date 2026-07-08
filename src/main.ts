/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Styles
import 'primeicons/primeicons.css'

// Services
import ToastService from 'primevue/toastservice'

// Components
import App from './App.vue'

const app = createApp(App)

app.use(ToastService)
registerPlugins(app)

app.mount('#app')
