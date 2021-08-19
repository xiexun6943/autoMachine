const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../components/home/Home')
    },
    {
        name: 'content',
        path: '/content',
        component: () => import('../components/content/Content')
    }
]

export default routes
