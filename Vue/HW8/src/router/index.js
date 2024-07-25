import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/project/id',
    name: 'project.id',
    component: () => import('../pages/ProjectDetails.vue')
  },
  {
    path: '/project/:pageNumber?',
    name: 'project',
    component: () => import('../pages/CategoryPage.vue')
  },
  {
    path: '/blog/id',
    name: 'blog.id',
    component: () => import('../pages/ProjectPage.vue')
  },
  {
    path: '/blog/:pageNumber?',
    name: 'blog',
    component: () => import('../pages/BlogPage.vue')
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: () => import('../pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
