// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		head: {
			title: 'Nuxt 3 Demo',
			meta: [{ name: 'description', content: 'Nuxt 3 Demo' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
			],
		},
	},
	runtimeConfig: {
		public: {
			productsBaseUrl: 'https://fakestoreapi.com/products/',
		},
	},
});
