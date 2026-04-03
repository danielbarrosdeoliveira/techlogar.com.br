<script setup lang="ts">
import Header from '~/components/base/Header.vue';
import AboutSection from '~/features/landing/components/AboutSection.vue';
import CardsHeroAbout from '~/features/landing/components/CardsHeroAbout.vue';
import ContactSection from '~/features/landing/components/ContactSection.vue';
import CreatorSection from '~/features/landing/components/CreatorSection.vue';
import FooterSection from '~/features/landing/components/FooterSection.vue';
import HeroSection from '~/features/landing/components/HeroSection.vue';

useSeoMeta({
	title: 'Techlogar - Tradição Teológica e Inovação Digital',
	description:
		'Edificando o saber teológico através das ferramentas da era digital. Explore conteúdos profundos, análises técnicas e reflexões bíblicas.',
});
</script>

<template>
	<div>
		<Header />
		<HeroSection />
		<CardsHeroAbout />
		<AboutSection />
		<CreatorSection />
		<ContactSection />
		<FooterSection />
	</div>
</template>
