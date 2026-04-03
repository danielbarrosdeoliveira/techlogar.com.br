<script setup lang="ts">
defineProps<{
	posts: { path: string; title: string; date: string }[];
}>();

const recentPosts = computed(() => posts.slice(0, 5));
</script>

<template>
	<div class="border-text/10 bg-background border p-6 shadow-md">
		<h3 class="text-text mb-6 font-serif text-xl font-bold">Posts Recentes</h3>
		<div class="space-y-4">
			<NuxtLink
				v-for="post in recentPosts"
				:key="post.path"
				:to="post.path"
				class="group block"
			>
				<h4
					class="text-text group-hover:text-primary line-clamp-2 font-sans text-sm font-bold transition-colors"
				>
					{{ post.title }}
				</h4>
				<p class="text-text/60 mt-1 font-sans text-xs">
					{{ new Date(post.date).toLocaleDateString('pt-BR') }}
				</p>
			</NuxtLink>
		</div>
	</div>
</template>
