import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Profile from './views/Profile.vue';
import Register from './views/Login.vue';
import Search from './views/Search.vue';
import Timeline from './views/Timeline.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Timeline',
      component: Timeline,
    },
    {
      path: '/:userid',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
    },

  ],
});
