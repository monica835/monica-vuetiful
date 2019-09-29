export default {
    routes: [
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['components/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['components/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: resolve => require(['components/frame/Profile.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/subjects',
        name: 'subjects',
        component: resolve => require(['components/frame/Subjects.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/sidebar',
        name: 'sidebar',
        component: resolve => require(['components/frame/SideBar.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(['components/frame/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    ]

}
