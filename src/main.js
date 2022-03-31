import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';

// styles
import '@/scss/import.scss';

// views
import Home from './js/views/Home';
import Work from './js/views/Work';

// setup routes
const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

createApp(App)
	.use(router)
	.mount('#app');
