import Vue from 'vue'
import VueRouter from 'vue-router'

import FilterDemo from '@/components/FilterDemo'
import RestFulDemo from '@/components/RestFulDemo'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/filterdemo',
            name: 'FilterDemo',
            component: FilterDemo
        },
        {
            path: '/restfuldemo',
            name: 'RestFullDemo',
            component: RestFulDemo
        }
    ]
})