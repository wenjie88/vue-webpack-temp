import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import './css/common.css'
import routers from './router.js'

// import User from './components/User.vue'
// import User2 from './components/User2.vue'
// import UserProfile from './components/UserProfile.vue'
// import userposts from './components/userposts.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:routers
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         next({ path: '/home' })
//     } else {
//         next()
//     }
// })

window.app = new Vue({
    el: "#app",
    render: h => h(App),
    router
})

