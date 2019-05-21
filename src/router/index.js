import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/Show'
import Doc from '@/components/Doc'
import Case from '@/components/Case'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Show',
            component: Show
        },
        {
            path: '/doc',
            name: 'doc',
            component: Doc
        },
        {
            path: '/case',
            name: 'case',
            component: Case
        }
    ]
})
