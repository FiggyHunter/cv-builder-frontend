<template #form>
	<form @submit.prevent="handleLogin" class="w-full">
		<InputField label="Email" type="email" v-model="email" />
		<InputField label="Password" type="password" v-model="password" />
		<LoginOptions v-model="rememberLogin" />
		<Button type="submit" text="Sign in" />
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginOptions from './LoginOptions.vue';
import InputField from '../shared/InputField.vue';
import Button from '../shared/Button.vue';
import auth from "../../api/auth/index";


const email = ref("");
const password = ref("");
const rememberLogin = ref(false);

const handleLogin = () => {
  auth.loginUser({ email: email.value, password: password.value });
};
</script>
