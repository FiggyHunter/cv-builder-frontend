<template>
	<transition name="modal" appear>
		<div
			v-if="isOpen"
			@click="closeModal"
			class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
			<div class="bg-white rounded-lg p-6 w-full mx-1 lg:w-1/2 2xl:w-1/3">
				<div class="flex justify-between items-center mb-4">
					<h2 class="text-3xl mb-1 text-blue-500 font-semibold">{{ title }}</h2>
					<button
						@click="closeModal"
						class="text-gray-500 text-lg px-2 py-0 bg-transparent hover:text-gray-700 focus:outline-none rounded-lg">
						X
					</button>
				</div>
				<div>
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
defineProps({
	isOpen: {
		type: Boolean,
		required: true,
		default: false,
	},
	title: {
		type: String,
		required: true,
	},
});
const emit = defineEmits(['close-modal']);

const closeModal = () => emit('close-modal');
</script>

<style>
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.5s;
}

.modal-enter,
.modal-leave-to {
	opacity: 0;
}
</style>
