import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Bar from '../components/Bar.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/bar',
        component: Bar

    }
]

const router = new VueRouter({
    routes,
    linkActiveClass:'active',
    mode: 'history' // 修改成history 模式
})

export default router