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
    name: '欢迎',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '一站式服务中心',
    routes: [
      {
        path: '/admin/faculty_office',
        name: '教授办公室',
        component: './admin/FacultyOffice',
      },
      {
        path: '/admin/service_index',
        name: '学生服务索引',
        component: './admin/ServiceIndex',
      },
    ],
  },
  {
    component: './404',
  },
];
