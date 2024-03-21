<template>
	<div class="flex flex-col justify-center items-center h-screen w-full">
		<h1 class="text-center text-3xl mb-1 text-black">
			Welcome to <span class="text-blue-600">Temporary Name</span>
		</h1>
		<h3 class="text-gray-500 mb-4">
			Please enter your details to join our Temporary family!
		</h3>
		<LoginForm />
		<div class="mt-6">
			<p class="text-center text-sm text-gray-400">
				Don't have an account?
				<RouterLink to="#" class="font-medium text-blue-600"
					>Sign up
				</RouterLink>
				for free
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import LoginForm from '../components/login/LoginForm.vue';
</script>
