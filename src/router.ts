import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue'
import Document from './view/Document.vue'
import MarkDown from './Document/MarkDown.vue'
import SwitchDemo from './components/SwitchDemos/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemos/ButtonDemo.vue'
import DialogDemo from './components/DialogDemos/DialogDemo.vue'
import TabsDemo from './components/TabsDemos/TabsDemo.vue'
import { h } from 'vue'
import Intro from './Document/markdown/intro.md'
import Install from './Document/markdown/install.md'
import Start from './Document/markdown/start.md'

const history = createWebHashHistory()

const md = string => h(MarkDown, { content: string, key: string })
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Document,
            children: [
                { path: '', redirect: 'doc/intro' },
                { path: 'intro', component: md(Intro) },
                { path: 'install', component: md(Install) },
                { path: 'start', component: md(Start) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]
})

