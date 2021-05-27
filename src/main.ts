import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/index.scss'
import './assets/style/fake.scss'
import { router } from './router'
import 'github-markdown-css'
import MarkDown from './Document/MarkDown.vue'


const app = createApp(App)
app.component('MarkDown', MarkDown)
app.use(router)
app.mount('#app')
