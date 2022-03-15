import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default new createRouter({
    history: createWebHistory(process.env.BASE_url),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: ()=> import('@/views/Todos.vue')
        }
    ]  
})