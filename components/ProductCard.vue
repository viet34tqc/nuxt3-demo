<template>
	<NuxtLink :to="`/products/${product.id}`">
		<div class="card text-center">
			<nuxt-img
				:src="`${product.image}`"
				class="thumb"
				loading="lazy"
				sizes="sm:100vw md:50vw lg:400px"
				width="100"
				height="120"
				fit="cover"
			/>
			<p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
			<p class="btn my-4">View Details</p>
		</div>
	</NuxtLink>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped>
.thumb {
	max-height: 120px;
	max-width: 70%;
	margin: 0 auto;
}
</style>
