<script setup lang="ts">
definePageMeta({
	layout: 'blog',
});

const route = useRoute();

const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
	queryCollection('content').path(`/blog/${route.params.slug}`).first()
);

const { data: relatedPosts } = await useAsyncData('related-posts', async () => {
	if (!post.value?.category) return [];
	const sameCategory = await queryCollection('content')
		.where('category', '=', post.value.category)
		.where('path', '<>', post.value.path)
		.limit(3)
		.all();
	return sameCategory;
});

useSeoMeta({
	title: () => `${post.value?.title} - Techlogar`,
	description: () => post.value?.description,
});

const shareUrl = computed(() => encodeURIComponent(window.location.href));
const shareTitle = computed(() => encodeURIComponent(post.value?.title || ''));
</script>

<template>
	<div
		v-if="post"
		class="bg-background min-h-screen"
	>
		<div class="relative h-80 md:h-96">
			<img
				:src="post.image || '/images/blog/placeholder.jpg'"
				:alt="post.title"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-black/50"></div>
			<div class="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-8">
				<div class="container mx-auto px-4">
					<span
						v-if="post.category"
						class="bg-secondary text-background mb-4 inline-block px-3 py-1 text-sm font-bold uppercase"
					>
						{{ post.category }}
					</span>
					<h1 class="text-background font-serif text-4xl font-bold md:text-5xl">
						{{ post.title }}
					</h1>
					<div class="text-background/80 mt-4 flex items-center gap-4">
						<span class="font-sans">{{ new Date(post.date).toLocaleDateString('pt-BR') }}</span>
						<span
							v-if="post.author"
							class="font-sans"
							>{{ post.author }}</span
						>
					</div>
				</div>
			</div>
		</div>

		<div class="container mx-auto px-4 py-12">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-4">
				<aside class="lg:col-span-1">
					<div class="sticky top-24">
						<div class="border-text/10 bg-background border p-6 shadow-md">
							<h3 class="text-text mb-4 font-serif text-xl font-bold">Compartilhar</h3>
							<div class="flex gap-3">
								<a
									:href="`https://wa.me/?text=${shareTitle}%20${shareUrl}`"
									target="_blank"
									class="bg-primary/10 text-primary hover:bg-primary hover:text-background flex h-10 w-10 items-center justify-center rounded transition-colors"
								>
									<Icon
										name="heroicons:chat-bubble-left-bottom"
										class="h-5 w-5"
									/>
								</a>
								<a
									:href="`https://www.instagram.com/sharer/sharer.php?u=${shareUrl}`"
									target="_blank"
									class="bg-primary/10 text-primary hover:bg-primary hover:text-background flex h-10 w-10 items-center justify-center rounded transition-colors"
								>
									<Icon
										name="heroicons:photo"
										class="h-5 w-5"
									/>
								</a>
								<a
									:href="`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`"
									target="_blank"
									class="bg-primary/10 text-primary hover:bg-primary hover:text-background flex h-10 w-10 items-center justify-center rounded transition-colors"
								>
									<Icon
										name="heroicons:bird"
										class="h-5 w-5"
									/>
								</a>
								<a
									:href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`"
									target="_blank"
									class="bg-primary/10 text-primary hover:bg-primary hover:text-background flex h-10 w-10 items-center justify-center rounded transition-colors"
								>
									<Icon
										name="heroicons:globe-alt"
										class="h-5 w-5"
									/>
								</a>
							</div>
						</div>
					</div>
				</aside>

				<article class="lg:col-span-2">
					<div class="prose prose-lg max-w-none">
						<ContentRenderer :value="post" />
					</div>

					<div
						v-if="post.tags?.length"
						class="mt-8 flex flex-wrap gap-2"
					>
						<span
							v-for="tag in post.tags"
							:key="tag"
							class="bg-primary/10 text-primary px-3 py-1 font-sans text-sm"
						>
							{{ tag }}
						</span>
					</div>
				</article>

				<aside class="lg:col-span-1">
					<div
						v-if="relatedPosts?.length"
						class="sticky top-24"
					>
						<h3 class="text-text mb-6 font-serif text-2xl font-bold">Posts Relacionados</h3>
						<div class="space-y-6">
							<NuxtLink
								v-for="related in relatedPosts"
								:key="related.path"
								:to="related.path"
								class="group block"
							>
								<div
									class="border-text/10 bg-background overflow-hidden border shadow-md transition-shadow hover:shadow-lg"
								>
									<img
										:src="related.image || '/images/blog/placeholder.jpg'"
										:alt="related.title"
										class="aspect-video w-full object-cover"
									/>
									<div class="p-4">
										<h4
											class="text-text group-hover:text-primary line-clamp-2 font-serif text-lg font-bold transition-colors"
										>
											{{ related.title }}
										</h4>
										<p class="text-text/60 mt-2 font-sans text-sm">
											{{ new Date(related.date).toLocaleDateString('pt-BR') }}
										</p>
									</div>
								</div>
							</NuxtLink>
						</div>
					</div>
				</aside>
			</div>
		</div>
	</div>

	<div
		v-else
		class="flex min-h-screen items-center justify-center"
	>
		<p class="text-text font-sans text-xl">Post não encontrado.</p>
	</div>
</template>
