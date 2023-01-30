import Vue from 'vue';
import VueRouter from 'vue-router';

import { commonRoutes } from '@/modules/common/routes';
import { authRoutes } from '@/modules/auth/routes';
import { accountRoutes } from '@/modules/account/routes';
import { settingsRoutes } from '@/modules/settings/routes';
import { dashboardRoutes } from '../modules/dashboard/routes';
import { edRoutes } from '@/modules/ED/routes';

Vue.use(VueRouter)

const routes = [
  ...commonRoutes,
  ...authRoutes,
  ...accountRoutes,
  ...settingsRoutes,
  ...dashboardRoutes,
  ...edRoutes
]

export const router = new VueRouter({
  mode: 'hash',
  routes,
  // base: process.env.BASE_URL
});

// for before each usage
let _store = null;
export const setStoreForRouter = store => _store = store

// router.beforeEach((to, from, next) => {
//   next();
// });

// export default router
