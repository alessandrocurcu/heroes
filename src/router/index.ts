import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: { name: 'Login' }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/PrimaPagina.vue')
    }
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import('@/views/LoginView.vue')
    // },
    // {
    //   path: '/businesses',
    //   name: 'Businesses',
    //   components: {
    //     default: () => import('@/views/BusinessesView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/businesses/new',
    //   name: 'BusinessNew',
    //   components: {
    //     default: () => import('@/views/BusinessNewView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/businesses/:id',
    //   name: 'Business',
    //   components: {
    //     default: () => import('@/views/BusinessDetailView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/businesses/:id/edit',
    //   name: 'BusinessEdit',
    //   components: {
    //     default: () => import('@/views/BusinessEditView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/projects',
    //   name: 'Projects',
    //   components: {
    //     default: () => import('@/views/ProjectsView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/projects/new',
    //   name: 'ProjectNew',
    //   components: {
    //     default: () => import('@/views/ProjectNewView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/projects/:id',
    //   name: 'Project',
    //   components: {
    //     default: () => import('@/views/ProjectDetailView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/projects/:id/new-audit',
    //   name: 'ProjectNewAudit',
    //   components: {
    //     default: () => import('@/views/ProjectNewAudit.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   components: {
    //     default: () => import('@/views/HomeView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/properties',
    //   name: 'Properties',
    //   components: {
    //     default: () => import('@/views/PropertiesView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/issues',
    //   name: 'Issues',
    //   components: {
    //     default: () => import('@/views/IssuesView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/instances',
    //   name: 'Instances',
    //   components: {
    //     default: () => import('@/views/InstancesView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/instances/:id',
    //   name: 'Instance',
    //   components: {
    //     default: () => import('@/views/InstanceDetailView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/users',
    //   name: 'Users',
    //   components: {
    //     default: () => import('@/views/UsersView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/users/new',
    //   name: 'UserNew',
    //   components: {
    //     default: () => import('@/views/UserNewView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/users/:id',
    //   name: 'User',
    //   components: {
    //     default: () => import('@/views/UserDetailView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/users/:id/edit',
    //   name: 'UserEdit',
    //   components: {
    //     default: () => import('@/views/UserEditView.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   components: {
    //     default: () => import('@/views/NotFound.vue'),
    //     TheNav: () => import('@/components/TheNav.vue')
    //   }
    // }
  ]
});

export default router;
