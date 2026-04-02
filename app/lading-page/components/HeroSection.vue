<script setup lang="ts">
const features = [
	{
		icon: 'book',
		title: 'Exegese e Doutrina',
		description:
			'Artigos profundos sobre teologia bíblica e sistemática, focados em manter a ortodoxia na era da informação.',
	},
	{
		icon: 'computer',
		title: 'Soluções Digitais',
		description:
			'Como usar a tecnologia para potencializar o estudo bíblico, com aprofundamento teológico.',
	},
	{
		icon: 'library',
		title: 'Biblioteca Curada',
		description:
			'Recomendações de livros, softwares e apps que testamos e aprovamos para sua jornada acadêmica.',
	},
];
</script>

<template>
	<section
		id="hero"
		class="relative flex min-h-screen items-center justify-center px-4 pt-20 pb-16"
	>
		<div
			class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
			style="background-image: url('/images/hero.jpg')"
		></div>
		<div class="absolute inset-0 z-0 bg-black/30"></div>

		<div class="relative z-10 container mx-auto mt-24 text-center">
			<h1
				class="text-background mb-6 font-serif text-5xl leading-tight font-bold md:text-6xl lg:text-7xl"
			>
				Tradição Teológica e<br />
				<span class="text-background">Inovação Digital</span>
			</h1>

			<p
				class="text-background mx-auto mb-10 max-w-3xl font-sans text-xl leading-relaxed font-semibold md:text-xl"
			>
				Edificando o saber teológico através das ferramentas da era digital. Explore conteúdos
				profundos, análises técnicas e reflexões bíblicas feitas para o cristão conectado.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<SharedButton
					variant="solid"
					size="lg"
					href="/blog"
					class="uppercase"
				>
					ir para o blog
				</SharedButton>
				<SharedButton
					variant="outline"
					size="lg"
					href="#contact"
					class="uppercase"
				>
					pedir oração
				</SharedButton>
			</div>

			<div class="mt-20">
				<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div
						v-for="feature in features"
						:key="feature.title"
						class="bg-background border-text/10 rounded-xl border p-6 shadow-md transition-shadow hover:shadow-lg"
					>
						<div
							class="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
						>
							<Icon
								v-if="feature.icon === 'book'"
								name="heroicons:book-open"
								class="text-primary"
								:size="32"
							/>
							<Icon
								v-else-if="feature.icon === 'computer'"
								name="heroicons:computer-desktop"
								class="text-primary"
								:size="32"
							/>
							<Icon
								v-else-if="feature.icon === 'library'"
								name="heroicons:building-library"
								class="text-primary"
								:size="32"
							/>
						</div>
						<h3 class="text-text mb-3 text-center font-serif text-xl font-bold">
							{{ feature.title }}
						</h3>
						<p class="text-text/70 text-center font-sans">
							{{ feature.description }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
