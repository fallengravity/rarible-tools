const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Burn', component: () => import('pages/Burn.vue') },
      { path: 'Unwrap', component: () => import('pages/Unwrap.vue') },
      { path: 'Cost', component: () => import('pages/Cost.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
