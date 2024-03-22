import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: SignUp,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		return {
			top: 0,
			left: 0,
			behavior: 'smooth',
		};
	},
});

export default router;
