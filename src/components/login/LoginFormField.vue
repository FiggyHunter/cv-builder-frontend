<template>
	<div class="mb-6">
		<label :for="label.toLowerCase()" class="hidden">{{ label }}</label>
		<input
			:modelValue="modelValue"
			:type="type"
			:id="label.toLowerCase()"
			:name="label.toLowerCase()"
			:placeholder="`${label}...`"
			@change="updateValue"
			class="mt-1 w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-blue-300 text-gray-600" />
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	modelValue: {
		type: String,
		required: true,
	},
});

const updateValue = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>
