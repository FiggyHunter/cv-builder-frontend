<template>
	<form @submit.prevent="handleLogin" class="w-full">
		<LoginFormField label="Email" type="email" v-model="email" />
		<LoginFormField label="Password" type="password" v-model="password" />
		<LoginOptions v-model="rememberLogin" />
		<button
			type="submit"
			class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full">
			Sign in
		</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginFormField from './LoginFormField.vue';
import LoginOptions from './LoginOptions.vue';

const email = ref('');
const password = ref('');
const rememberLogin = ref(false);

const handleLogin = () => {
	console.log('click');
	console.log(email.value);
	console.log(password.value);
	console.log(rememberLogin.value);
};
</script>
