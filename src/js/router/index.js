import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../views/home.vue'
import Categories from '../../views/categories.vue'
import MyFavorites from '../../views/myFavorites.vue'
import SignIn from '../../views/signIn.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    }, {
        path: '/myFavorites',
        name: 'MyFavorites',
        component: MyFavorites
    }, {
        path: '/signIn',
        name: 'SignIn',
        component: SignIn
    }
]

const router = new VueRouter({
    routes
})

export default router