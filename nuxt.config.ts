// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	srcDir: 'app/',

	future: {
		compatibilityVersion: 4,
	},

	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/content'],

	components: [
		// 1. Componentes Base (ex: app/components/base/Button.vue -> <BaseButton />)
		{ path: '~/components/base', prefix: 'Base' },

		// 2. Feature Blog (ex: app/features/blog/components/BlogCard.vue -> <BlogCard />)
		{ path: '~/features/blog/components', pathPrefix: false },

		// 3. Feature Landing (ex: app/features/landing/components/HeroSection.vue -> <HeroSection />)
		{ path: '~/features/landing/components', pathPrefix: false },
	],

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
