import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './view/Home.vue'
import Document from './view/Document.vue'
import Intro from './Document/Introduction.vue'
import Install from './Document/Install.vue'
import Start from './Document/Start.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Document,
            children: [
                {path: 'intro', component: Intro},
                {path: 'install', component: Install},
                {path: 'start', component: Start},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}
            ]
        }
    ]
})

