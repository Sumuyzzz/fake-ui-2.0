import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import './lib/fake.scss'
import {router} from './router'
import 'github-markdown-css'


const app = createApp(App)
app.use(router)
app.mount('#app')
