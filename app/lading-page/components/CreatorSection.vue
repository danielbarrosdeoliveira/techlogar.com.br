<template>
	<section
		id="creator"
		class="px-4 py-20"
	>
		<div class="container mx-auto max-w-6xl">
			<h2 class="text-text mb-8 text-center font-serif text-3xl font-bold md:text-4xl">
				Criador do Projeto
			</h2>

			<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:p-12">
				<div class="order-2 flex justify-center md:order-1">
					<img
						src="/images/idealizador.png"
						alt="Daniel Oliveira"
						class="max-w-80 rounded-xl object-cover shadow-lg"
					/>
				</div>

				<div class="order-1 md:order-2">
					<p class="text-text/80 mb-6 font-sans text-lg leading-relaxed">
						Meu nome é <strong>Daniel Oliveira</strong>, sou graduado em Análise e Desenvolvimento
						de Sistemas, com especializações em Cloud Computing e Aplicativos Móveis, também possuo
						formação em curso básico e médio de Teologia livre pela Universidade Teológica Kerigma,
						atualmente estou cursando a formação completa em Teologia pelo Instituto Bíblico e
						Teológico Filadelfia (IBTF), e unindo os doius mundos tecnologia e teologia, criei o
						blog Techlogar. Minha missão aqui é ser mais que um blog: é aplicar a inovação digital
						para organizar, aprofundar e compartilhar o conhecimento das Escrituras de forma
						acessível e disruptiva.
					</p>

					<div class="text-center md:text-start">
						<SharedButton
							variant="primary"
							size="lg"
							href="https://www.instagram.com/diac.danieloliveira/"
							target="_blank"
						>
							SAIBA MAIS
						</SharedButton>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
