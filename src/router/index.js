import Vue from 'vue'
import VueRouter from 'vue-router'

import FilterDemo from '@/components/FilterDemo.vue'
import RestFulDemo from '@/components/RestFulDemo.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: FilterDemo
        },
        {
            path: '/restfuldemo',
            name: 'restfuldemo',
            component: RestFulDemo
        }
    ]
})