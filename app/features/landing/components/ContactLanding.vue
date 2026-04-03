<template>
	<section
		id="contact"
		class="bg-primary/5 px-4 py-20"
	>
		<div class="container mx-auto max-w-3xl">
			<div class="mb-12 text-center">
				<h2 class="text-text inline-block font-serif text-5xl font-bold">Contato</h2>
				<div class="bg-secondary mt-8 h-1 w-32"></div>
			</div>

			<p class="text-text/70 mx-auto mb-10 max-w-2xl text-center font-sans text-lg">
				Tem alguma dúvida sobre como a tecnologia pode auxiliar seus estudos teológicos ou quer
				falar sobre tecnologia? Estou à disposição para conversarmos. Seja para parcerias, sugestões
				ou apenas um café virtual, sinta-se à vontade para enviar uma mensagem.
			</p>

			<div class="bg-background border-text/10 rounded-xl border p-8 text-center shadow-lg">
				<div
					class="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
				>
					<Icon
						name="heroicons:envelope"
						class="text-primary h-8 w-8"
					/>
				</div>

				<h3 class="text-text mb-4 font-serif text-xl font-bold">Vamos conversar!</h3>

				<p class="text-text/70 mb-6 font-sans">
					Mande um e-mail e retornarei o mais breve possível.
				</p>

				<BaseButton
					variant="primary"
					size="lg"
					href="mailto:paz@techlogar.com.br"
				>
					<Icon
						name="heroicons:envelope"
						class="mr-2 h-5 w-5"
					/>
					paz@techlogar.com.br
				</BaseButton>
			</div>
		</div>
	</section>
</template>
