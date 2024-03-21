<template>
	<div class="flex justify-between mb-6">
		<div class="flex space-x-2">
			<input
				type="checkbox"
				id="remember-login"
				:checkboxValue="checkboxValue"
				@change="updateValue" />
			<label for="remember-login" class="text-gray-400"
				>Remember account?</label
			>
		</div>
		<RouterLink to="/" class="text-sm text-blue-600"
			>Reset password?</RouterLink
		>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
	checkboxValue: {
		type: String,
		required: true,
	},
});

const updateValue = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).checked);
};
</script>
