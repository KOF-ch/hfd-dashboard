
const routes = [
  {
    path: '/',
    component: () => import('layouts/Standard.vue'),
    children: [
      { path: '', component: () => import('pages/Status.vue') },
      { path: 'keys', component: () => import('pages/Keys.vue')}
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
