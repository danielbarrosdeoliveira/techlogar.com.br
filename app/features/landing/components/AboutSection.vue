<template>
	<section
		id="about"
		class="bg-primary/5 px-4 py-20"
	>
		<div class="container mx-auto max-w-6xl">
			<div class="mb-12 text-center">
				<h2 class="text-text inline-block font-serif text-5xl font-bold">Quem Somos</h2>
				<div class="bg-secondary mt-8 h-1 w-32"></div>
			</div>

			<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:p-12">
				<div>
					<p class="text-text/80 mb-8 font-sans text-lg leading-relaxed">
						O Techlogar nasceu da união entre a paixão pelas Escrituras e o domínio das ferramentas
						modernas. Idealizado por um especialista em TI, o projeto surgiu como um espaço pessoal
						para compartilhar o conhecimento teológico através da tecnologia. Nosso nome é um
						convite: um trocadilho com o ato de teologar, mas com o olhar voltado para as soluções
						digitais que potencializam o estudo bíblico. Aqui, a tradição teológica não apenas
						caminha junto com a inovação, ela é impulsionada por ela.
					</p>

					<div class="text-center md:text-start">
						<SharedButton
							variant="primary"
							size="lg"
							href="/blog"
						>
							IR PARA O BLOG
						</SharedButton>
					</div>
				</div>

				<div class="flex justify-center">
					<img
						src="/images/about.png"
						alt="Sobre o Techlogar"
						class="max-h-80 rounded-xl object-cover shadow-lg"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
