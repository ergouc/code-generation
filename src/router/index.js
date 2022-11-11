import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes = [{
  path: '',
  name: '项目配置',
  component: () => import('@/views/Config')
}, {
  path: '/entrance',
  name: '项目配置',
  component: () => import('@/views/Config')
}]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router