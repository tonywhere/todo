import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Default'
import Home from '../components/Home.vue'
import Bar from '../components/Bar.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/home",
        component: Layout,
        children: [
            {
                path: 'home',
                component: Home
            },
            {
                path: 'bar',
                component: Bar
        
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    linkActiveClass:'active',
    mode: 'history' // 修改成history 模式
})

export default router