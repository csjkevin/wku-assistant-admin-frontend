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
    access: 'user',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'onestop',
    access: 'onestop',
    routes: [
      {
        path: '/admin/faculty_office',
        name: 'facultyOffice',
        component: './admin/FacultyOffice',
      },
      {
        path: '/admin/service_index',
        name: 'serviceGuidance',
        component: './admin/ServiceIndex',
      },
    ],
  },
  {
    component: './404',
  },
];
