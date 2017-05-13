

const UserProfile = r => require.ensure([], () => r(require('./components/UserProfile.vue')), 'UserProfile')
const User = r => require.ensure([], () => r(require('./components/User.vue')), 'User')
const userposts = r => require.ensure([], () => r(require('./components/userposts.vue')), 'userposts')

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

export default [
        {
            path: '/User/:id/',
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
        { path: '/home', component: home },
        { path: '/', component: home },
        { path: '*', component: notFound }
    ]

