<script setup lang="ts">
defineProps<{
	post: {
		path: string;
		title: string;
		description: string;
		date: string;
		image?: string;
		author?: string;
		category?: string;
		tags?: string[];
	};
}>();
</script>

<template>
	<NuxtLink
		:to="post.path"
		class="group block"
	>
		<article
			class="bg-background border-text/10 overflow-hidden border shadow-md transition-shadow hover:shadow-lg"
		>
			<div class="relative aspect-video overflow-hidden">
				<img
					:src="post.image || '/images/blog/placeholder.jpg'"
					:alt="post.title"
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<span
					v-if="post.category"
					class="bg-secondary text-background absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase"
				>
					{{ post.category }}
				</span>
			</div>

			<div class="p-6">
				<div class="text-text/60 mb-3 flex items-center gap-4 text-sm">
					<span class="font-sans">{{ new Date(post.date).toLocaleDateString('pt-BR') }}</span>
					<span
						v-if="post.author"
						class="font-sans"
						>{{ post.author }}</span
					>
				</div>

				<h3
					class="text-text group-hover:text-primary mb-3 line-clamp-2 font-serif text-xl font-bold transition-colors"
				>
					{{ post.title }}
				</h3>

				<p class="text-text/70 mb-4 line-clamp-3 font-sans text-sm">
					{{ post.description }}
				</p>

				<div
					v-if="post.tags?.length"
					class="flex flex-wrap gap-2"
				>
					<span
						v-for="tag in post.tags"
						:key="tag"
						class="bg-primary/10 text-primary px-2 py-1 font-sans text-xs"
					>
						{{ tag }}
					</span>
				</div>
			</div>
		</article>
	</NuxtLink>
</template>
