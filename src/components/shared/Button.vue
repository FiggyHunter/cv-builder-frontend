<template>
	<button
		:type="type || 'button'"
		:class="`${bgColor || 'bg-blue-600'} ${
			color ? color : 'text-white'
		} font-bold py-2 px-4 rounded-lg ${width || 'w-full'}`">
		{{ text }}
	</button>
</template>

<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset' | undefined;

defineProps({
	type: {
		type: Object as () => ButtonType,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	bgColor: {
		type: String,
		required: false,
	},
	color: {
		type: String,
		required: false,
	},
	width: {
		type: String,
		required: false,
	},
});
</script>
