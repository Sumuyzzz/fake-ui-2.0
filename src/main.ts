import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Document from './components/Document.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Document }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
