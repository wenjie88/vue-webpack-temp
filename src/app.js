import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Foo from './Foo.vue'
import Bar from './Bar.vue'
import './css/common.css'

Vue.use(VueRouter)
const notFound = {
    template: `
        <div>
            <h2>404 notFound </h2>
        </div>
    `
}
const home = {
    template: `
        <div>
            <h2>home </h2>
        </div>
    `
}
const User = {
    template: `
        <div class = 'user'>
            <h2>User {{ $route.params.id }}</h2>
            <router-link to='/User/Foo/profile'>/User/Foo/profile</router-link>
            <router-link to='/User/Foo/posts'>/User/Foo/posts</router-link>
            <router-view></router-view>
        </div>
    ` ,
    data() {
        return { msg: 'this is user' }
    },
    beforeRouteEnter(to, from, next) {
        console.log('user')
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('user update')
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('user Leave: ' + this.msg)
        next()
    },
    created(){
        this.fetchData()
    },
    watch:{
        '$route':'fetchData'
    },
    methods:{
        fetchData(){
            console.log('获取数据...')
        }
    }
}
const User2 = {
    template: `
        <div class = 'user2'>
            <h2>User {{ $route.params.id }}</h2>
            <router-link to='/User/Bar/profile'>/User/Bar/profile</router-link>
            <router-link to='/User/Bar/posts'>/User/Bar/posts</router-link>
            <router-view></router-view>
        </div>`
}

const UserProfile = {
    template: `
        <div class = 'userprofile'>
            <h2>User userprofile</h2>
        </div>
    ` ,
    data() {
        return { msg: 'this is UserProfile' }
    },
    beforeRouteEnter(to, from, next) {
        console.log('UserProfile')
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('UserProfile update')
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('UserProfile Leave : ' + this.msg)
        next()
    }
}
window.isok = true
window.userposts = {
    template: `
        <div class = 'userposts'>
            <h2>User userposts</h2>
            <input v-model='isok'>
        </div>
    ` ,
    data() {
        return { msg: 'this is uesrposts', isok: 'true' }
    },
    beforeRouteEnter(to, from, next) {
        console.log('userposts')
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('userposts update')
        next()
    },
    beforeRouteLeave(to, from, next) {

        if (this.isok === 'true') {
            console.log('userposts Leave: ' + this.msg)
            next()
        } else {
            console.log('不能跳转 ')
            next(false)
        }
    }
}

window.router = new VueRouter({
    routes: [
        {
            path: '/User/Foo/',
            component: User,
            children: [
                {
                    path: 'profile',
                    component: UserProfile,
                    meta: { requiresAuth: true }
                },
                {
                    path: 'posts',
                    component: userposts,
                    meta: { requiresAuth: false }
                }
            ]
        },
        {
            path: '/User/Bar/', component: User2, children: [
                {
                    path: 'profile',
                    component: UserProfile,
                    meta: { requiresAuth: true }
                },
                {
                    path: 'posts',
                    component: userposts,
                    meta: { requiresAuth: false }
                }
            ]
        },
        { path: '/home', component: home },
        { path: '/', component: home },
        { path: '*', component: notFound }
    ],

})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        next({ path: '/home' })
    } else {
        next()
    }
})

window.app = new Vue({
    el: "#app",
    render: h => h(App),
    router
})

