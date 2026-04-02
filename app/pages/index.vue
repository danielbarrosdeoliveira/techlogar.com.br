<script setup lang="ts">
import AboutSection from '~/lading-page/components/AboutSection.vue';
import ContactSection from '~/lading-page/components/ContactSection.vue';
import CreatorSection from '~/lading-page/components/CreatorSection.vue';
import FooterSection from '~/lading-page/components/FooterSection.vue';
import HeaderSection from '~/lading-page/components/HeaderSection.vue';
import HeroSection from '~/lading-page/components/HeroSection.vue';

useSeoMeta({
	title: 'Techlogar - Tradição Teológica e Inovação Digital',
	description:
		'Edificando o saber teológico através das ferramentas da era digital. Explore conteúdos profundos, análises técnicas e reflexões bíblicas.',
});
</script>

<template>
	<div>
		<HeaderSection />
		<HeroSection />
		<AboutSection />
		<CreatorSection />
		<ContactSection />
		<FooterSection />
	</div>
</template>
