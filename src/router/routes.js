const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Burn', component: () => import('pages/Burn.vue') },
      { path: 'Cost', component: () => import('pages/Cost.vue') },
      { path: 'Viewer', component: () => import('pages/ItemView.vue') },
      { path: 'Unwrap', component: () => import('pages/Unwrap.vue') },
      { path: 'Unlockable', component: () => import('pages/Unlockable.vue') },
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
