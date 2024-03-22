<template>
	<div
		class="flex flex-col w-full md:items-center lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-x-12 lg:h-screen lg:w-full">
		<div class="lg:w-1/2 lg:h-screen">
			<slot name="img"
				><img
					src="/login-img.webp"
					alt="title"
					class="opacity-70 w-full lg:object-cover lg:h-screen"
			/></slot>
		</div>
		<div class="px-4 mt-4 md:w-3/4 lg:w-1/3 lg:mt-0">
			<h1 class="text-center text-3xl mb-1 text-black">
				Welcome to <span class="text-blue-600">Temporary Name</span>
			</h1>
			<h3 class="text-gray-500 mb-4">
				Please enter your details to join our Temporary family!
			</h3>
			<slot name="form"></slot>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
