export default [
  {
    path: '/login',
    layout: false,
    routes: [{ path: '/login', name: 'login', component: './Login' }],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: './Welcome',
  },
  {
    component: './404',
  },
];
