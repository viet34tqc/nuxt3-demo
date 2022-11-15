<script setup>
const { id } = useRoute().params;
const runtimeConfig = useRuntimeConfig();

const uri = runtimeConfig.public.productsBaseUrl + id;

//  fetch the products
//const { data: product } = await useFetch(uri);
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
	throw createError({ statusCode: 404, statusMessage: 'Product not found' });
}

definePageMeta({
	layout: 'products',
});
</script>

<template>
	<div>
		<Head>
			<Title>Nuxt Dojo | {{ product.title }}</Title>
			<Meta name="description" :content="product.description" />
		</Head>

		<ProductDetails :product="product" />
	</div>
</template>
