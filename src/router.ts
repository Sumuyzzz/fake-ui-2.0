import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue'
import Document from './view/Document.vue'
import { h } from 'vue'
import MarkDown from './Document/MarkDown.vue'
import SwitchDemo from './components/SwitchDemos/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemos/ButtonDemo.vue'
import DialogDemo from './components/DialogDemos/DialogDemo.vue'
import TabsDemo from './components/TabsDemos/TabsDemo.vue'


const history = createWebHashHistory()
const md = filename => h(MarkDown, { path: `./markdown/${filename}.md`, key: filename })
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Document,
            children: [
                { path: '', redirect: 'doc/intro' },
                { path: 'intro', component: md('intro') },
                { path: 'install', component: md('install') },
                { path: 'start', component: md('start') },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]
})

