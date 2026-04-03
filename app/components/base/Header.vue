<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		menuItems?: { label: string; href: string }[];
	}>(),
	{
		menuItems: () => [
			{ label: 'Início', href: '#hero' },
			{ label: 'Sobre', href: '#about' },
			{ label: 'Criador', href: '#creator' },
			{ label: 'Contato', href: '#contact' },
			{ label: 'Blog', href: '/blog' },
		],
	}
);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false;
};
</script>

<template>
	<header class="bg-background fixed top-0 right-0 left-0 z-50">
		<nav class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<a
					href="#hero"
					class="text-text cursor-pointer font-serif text-2xl font-bold"
				>
					Techlogar
				</a>

				<ul class="hidden items-center gap-8 md:flex">
					<li
						v-for="item in menuItems"
						:key="item.label"
					>
						<a
							:href="item.href"
							class="text-text hover:text-secondary text-md group relative cursor-pointer font-sans tracking-wider uppercase transition-colors"
						>
							<span class="relative">
								{{ item.label }}
								<span
									class="bg-primary absolute top-6 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
								></span>
							</span>
						</a>
					</li>
				</ul>

				<button
					class="text-text p-2 md:hidden"
					aria-label="Menu"
					@click="toggleMobileMenu"
				>
					<div class="hamburger">
						<span
							:class="['hamburger-line', isMobileMenuOpen ? 'hamburger-line-top-active' : '']"
						></span>
						<span
							:class="['hamburger-line', isMobileMenuOpen ? 'hamburger-line-middle-active' : '']"
						></span>
						<span
							:class="['hamburger-line', isMobileMenuOpen ? 'hamburger-line-bottom-active' : '']"
						></span>
					</div>
				</button>
			</div>

			<div
				v-if="isMobileMenuOpen"
				class="mt-4 pb-4 md:hidden"
			>
				<ul class="flex flex-col gap-4">
					<li
						v-for="item in menuItems"
						:key="item.label"
					>
						<a
							:href="item.href"
							class="text-text hover:text-secondary group relative block cursor-pointer font-sans font-bold uppercase transition-colors"
							@click="closeMobileMenu"
						>
							<span class="relative">
								{{ item.label }}
								<span
									class="bg-secondary absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform group-hover:scale-x-100"
								></span>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<style scoped>
.hamburger {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	width: 24px;
	height: 24px;
}

.hamburger-line {
	display: block;
	width: 100%;
	height: 2px;
	background-color: currentColor;
	border-radius: 2px;
	transition: all 0.3s ease-in-out;
	transform-origin: center;
}

.hamburger-line-top-active {
	transform: translateY(7px) rotate(45deg);
}

.hamburger-line-middle-active {
	opacity: 0;
	transform: scaleX(0);
}

.hamburger-line-bottom-active {
	transform: translateY(-7px) rotate(-45deg);
}
</style>
