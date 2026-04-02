// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	srcDir: 'app/',

	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/content'],

	css: ['~/assets/css/main.css'],

	fonts: {
		families: [
			{ name: 'Poltawski Nowy', provider: 'google' },
			{ name: 'Outfit', provider: 'google' },
		],
	},

	vite: {
		optimizeDeps: {
			include: ['@vue/devtools-core', '@vue/devtools-kit'],
		},
		plugins: [tailwindcss()],
	},
});
