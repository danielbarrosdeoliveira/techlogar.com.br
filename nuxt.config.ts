// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	srcDir: 'app/',

	future: {
		compatibilityVersion: 4,
	},
	app: {
		head: {
			title: 'TechLogar',
			meta: [
				{ name: 'description', content: 'Tecnologia e Teologia de forma prática.' },
				{ name: 'theme-color', content: '#ffffff' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
				{ rel: 'manifest', href: '/site.webmanifest' },
			],
		},
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
