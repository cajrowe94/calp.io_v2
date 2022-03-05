import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import '@/scss/import.scss';

const store = createStore({
	state() {
		return {
			mobileMenuOpen: false,
			theme: 'default',
		}
	},
	mutations: {
		// mutations
	}
});

createApp(App).mount('#app');

App.use(store);
