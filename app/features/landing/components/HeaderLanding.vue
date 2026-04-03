<script setup lang="ts">
import { menuItems } from '../constants';

const isMobileMenuOpen = ref(false);
const activeSection = ref('hero');

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false;
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
	const sections = menuItems
		.filter((item) => item.href.startsWith('#'))
		.map((item) => item.href.substring(1));

	const observerOptions = {
		root: null,
		rootMargin: '-50% 0px -50% 0px',
		threshold: 0,
	};

	observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				activeSection.value = entry.target.id;
			}
		});
	}, observerOptions);

	sections.forEach((sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			observer!.observe(element);
		}
	});
});

onUnmounted(() => {
	if (observer) {
		observer.disconnect();
	}
});
</script>

<template>
	<header class="bg-background fixed top-0 right-0 left-0 z-50">
		<nav class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<a
					href="#hero"
					class="text-text cursor-pointer font-serif text-2xl font-bold"
				>
					<img
						src="/images/logo-completa.png"
						alt="Daniel Oliveira"
						class="max-w-40 rounded-xl object-cover"
					/>
				</a>

				<ul class="hidden items-center gap-8 md:flex">
					<li
						v-for="item in menuItems"
						:key="item.label"
					>
						<a
							:href="item.href"
							:class="[
								'group relative cursor-pointer font-sans text-sm tracking-wider uppercase transition-colors',
								activeSection === item.href.substring(1)
									? 'text-secondary'
									: 'text-text hover:text-secondary',
							]"
						>
							<span class="relative">
								{{ item.label }}
								<span
									:class="[
										'absolute top-6 left-0 h-0.5 w-full origin-left transition-transform duration-500',
										activeSection === item.href.substring(1)
											? 'bg-primary scale-x-100'
											: 'bg-primary scale-x-0 group-hover:scale-x-100',
									]"
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
							:class="[
								'group relative block cursor-pointer font-sans font-bold uppercase transition-colors',
								activeSection === item.href.substring(1)
									? 'text-secondary'
									: 'text-text hover:text-secondary',
							]"
							@click="closeMobileMenu"
						>
							<span class="relative">
								{{ item.label }}
								<span
									:class="[
										'absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform group-hover:scale-x-100',
										activeSection === item.href.substring(1)
											? 'bg-primary scale-x-100'
											: 'bg-primary scale-x-0',
									]"
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
