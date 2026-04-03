<script setup lang="ts">
import Header from '~/components/base/Header.vue';
</script>

<template>
	<div>
		<Header
			:menu-items="[
				{ label: 'Início', href: '/' },
				{ label: 'Blog', href: '/blog' },
			]"
		/>
		<slot />
	</div>
</template>
