import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: () =>
        import(/* webpackChunkName: "agenda" */ './views/Agenda.vue'),
    },
    {
      path: '/mentors',
      name: 'mentors',
      component: () =>
        import(/* webpackChunkName: "mentors" */ './views/Mentors.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "faq" */ './views/Faq.vue'),
    },
  ],
})
