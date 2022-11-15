<script setup>
const runtimeConfig = useRuntimeConfig();
//  fetch the products
const { data: products } = await useFetch(runtimeConfig.public.productsBaseUrl);

definePageMeta({
	layout: 'products',
});

useHead({
	title: 'Nuxt Dojo | Merch',
	meta: [{ name: 'description', content: 'Nuxt 3 Merch' }],
});
</script>

<template>
	<div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products">
				<ProductCard :product="p" />
			</div>
		</div>
	</div>
</template>
