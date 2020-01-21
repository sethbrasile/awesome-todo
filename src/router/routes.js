
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/TodoList/TodoList.vue')
      },
      {
        path: '/auth',
        component: () => import('pages/Auth/Auth.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/Settings/Settings.vue')
      },
      {
        path: '/settings/help',
        component: () => import('pages/Settings/Help.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
