import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';

// styles
import '@/scss/import.scss';

// views
import Home from './js/views/Home';
import Work from './js/views/Work';
import Art from './js/views/Art';

// setup routes
const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/art', component: Art },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

createApp(App)
	.use(router)
	.mount('#app');
