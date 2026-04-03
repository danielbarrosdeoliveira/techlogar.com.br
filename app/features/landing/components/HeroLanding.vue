<template>
	<section
		id="hero"
		class="relative z-0 flex min-h-screen items-center justify-center px-4 pt-40 pb-16"
	>
		<div
			class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
			style="background-image: url('/images/hero.jpg')"
		></div>
		<div class="absolute inset-0 z-0 bg-black/50"></div>

		<div class="relative z-10 container mx-auto mt-24 text-center">
			<h1
				class="text-background mb-6 font-serif text-5xl leading-tight font-bold md:text-6xl lg:text-7xl"
			>
				Tradição Teológica e<br />
				Inovação Digital
			</h1>

			<p
				class="text-background mx-auto mb-10 max-w-3xl font-sans text-xl leading-relaxed md:text-xl"
			>
				Edificando o saber teológico através das ferramentas da era digital. Explore conteúdos
				profundos, análises técnicas e reflexões bíblicas feitas para o cristão conectado.
			</p>

			<div class="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="/blog"
					class="bg-primary text-background hover:bg-secondary border-primary hover:border-secondary cursor-pointer border px-6 py-3 font-light uppercase shadow-md transition-colors duration-300"
				>
					ir para o blog
				</a>
				<a
					href="#contact"
					class="text-background border-background hover:bg-background hover:text-text cursor-pointer border bg-transparent px-6 py-3 font-light uppercase shadow-md transition-colors duration-300"
				>
					pedir oração
				</a>
			</div>
		</div>
	</section>
</template>
