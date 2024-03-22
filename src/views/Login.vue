<template>
	<LoginLayout>
		<template #form>
			<LoginForm />
		</template>
	</LoginLayout>
</template>

<script setup lang="ts">
import LoginForm from '../components/login/LoginForm.vue';
import LoginLayout from '../layouts/LoginLayout.vue';
</script>
