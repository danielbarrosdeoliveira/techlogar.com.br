<script setup lang="ts">
import BlogCard from '~/features/blog/components/BlogCard.vue';

definePageMeta({
	layout: 'blog',
});

useSeoMeta({
	title: 'Blog - Techlogar',
	description: 'Artigos sobre teologia, tecnologia e estudos bíblicos.',
});

const searchQuery = ref('');
const selectedCategory = ref('');
const selectedYear = ref('');
const selectedMonth = ref('');
const selectedTag = ref('');

const { data: posts } = await useAsyncData('blog-posts', () => queryCollection('content').all());

const categories = computed(() => {
	const cats = new Set(posts.value?.map((p) => p.category).filter(Boolean));
	return Array.from(cats);
});

const years = computed(() => {
	const yrs = new Set(posts.value?.map((p) => new Date(p.date).getFullYear()).filter(Boolean));
	return Array.from(yrs).sort((a, b) => b - a);
});

const months = [
	{ value: '01', label: 'Janeiro' },
	{ value: '02', label: 'Fevereiro' },
	{ value: '03', label: 'Março' },
	{ value: '04', label: 'Abril' },
	{ value: '05', label: 'Maio' },
	{ value: '06', label: 'Junho' },
	{ value: '07', label: 'Julho' },
	{ value: '08', label: 'Agosto' },
	{ value: '09', label: 'Setembro' },
	{ value: '10', label: 'Outubro' },
	{ value: '11', label: 'Novembro' },
	{ value: '12', label: 'Dezembro' },
];

const tags = computed(() => {
	const allTags = new Set<string>();
	posts.value?.forEach((p) => {
		p.tags?.forEach((t: string) => allTags.add(t));
	});
	return Array.from(allTags);
});

const filteredPosts = computed(() => {
	if (!posts.value) return [];

	return posts.value.filter((post) => {
		const matchesSearch =
			!searchQuery.value ||
			post.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
			post.description?.toLowerCase().includes(searchQuery.value.toLowerCase());

		const matchesCategory = !selectedCategory.value || post.category === selectedCategory.value;

		const postYear = new Date(post.date).getFullYear().toString();
		const matchesYear = !selectedYear.value || postYear === selectedYear.value;

		const postMonth = (new Date(post.date).getMonth() + 1).toString().padStart(2, '0');
		const matchesMonth = !selectedMonth.value || postMonth === selectedMonth.value;

		const matchesTag = !selectedTag.value || post.tags?.includes(selectedTag.value);

		return matchesSearch && matchesCategory && matchesYear && matchesMonth && matchesTag;
	});
});

const clearFilters = () => {
	searchQuery.value = '';
	selectedCategory.value = '';
	selectedYear.value = '';
	selectedMonth.value = '';
	selectedTag.value = '';
};
</script>

<template>
	<div class="bg-background min-h-screen">
		<header class="bg-primary py-16">
			<div class="container mx-auto px-4">
				<h1 class="text-background font-serif text-5xl font-bold">Blog</h1>
				<p class="text-background/80 mt-4 font-sans text-xl">Artigos sobre teologia e tecnologia</p>
			</div>
		</header>

		<div class="container mx-auto px-4 py-12">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-4">
				<main class="lg:col-span-3">
					<div
						v-if="filteredPosts.length === 0"
						class="py-12 text-center"
					>
						<p class="text-text font-sans text-lg">
							Nenhum post encontrado com os filtros selecionados.
						</p>
					</div>

					<div
						v-else
						class="grid grid-cols-1 gap-8 md:grid-cols-2"
					>
						<BlogCard
							v-for="post in filteredPosts"
							:key="post.path"
							:post="post"
						/>
					</div>
				</main>

				<aside class="lg:col-span-1">
					<div class="bg-background border-text/10 sticky top-24 border p-6 shadow-md">
						<h2 class="text-text mb-6 font-serif text-2xl font-bold">Filtros</h2>

						<div class="space-y-6">
							<div>
								<label class="text-text mb-2 block font-sans text-sm font-bold">Buscar</label>
								<input
									v-model="searchQuery"
									type="text"
									placeholder="Buscar posts..."
									class="border-text/20 focus:border-primary w-full rounded border px-4 py-2 font-sans focus:outline-none"
								/>
							</div>

							<div>
								<label class="text-text mb-2 block font-sans text-sm font-bold">Categoria</label>
								<select
									v-model="selectedCategory"
									class="border-text/20 focus:border-primary w-full rounded border px-4 py-2 font-sans focus:outline-none"
								>
									<option value="">Todas</option>
									<option
										v-for="cat in categories"
										:key="cat"
										:value="cat"
									>
										{{ cat }}
									</option>
								</select>
							</div>

							<div>
								<label class="text-text mb-2 block font-sans text-sm font-bold">Ano</label>
								<select
									v-model="selectedYear"
									class="border-text/20 focus:border-primary w-full rounded border px-4 py-2 font-sans focus:outline-none"
								>
									<option value="">Todos</option>
									<option
										v-for="year in years"
										:key="year"
										:value="year"
									>
										{{ year }}
									</option>
								</select>
							</div>

							<div>
								<label class="text-text mb-2 block font-sans text-sm font-bold">Mês</label>
								<select
									v-model="selectedMonth"
									class="border-text/20 focus:border-primary w-full rounded border px-4 py-2 font-sans focus:outline-none"
								>
									<option value="">Todos</option>
									<option
										v-for="month in months"
										:key="month.value"
										:value="month.value"
									>
										{{ month.label }}
									</option>
								</select>
							</div>

							<div>
								<label class="text-text mb-2 block font-sans text-sm font-bold">Tema</label>
								<select
									v-model="selectedTag"
									class="border-text/20 focus:border-primary w-full rounded border px-4 py-2 font-sans focus:outline-none"
								>
									<option value="">Todos</option>
									<option
										v-for="tag in tags"
										:key="tag"
										:value="tag"
									>
										{{ tag }}
									</option>
								</select>
							</div>

							<button
								@click="clearFilters"
								class="text-primary hover:text-secondary w-full font-sans font-bold uppercase transition-colors"
							>
								Limpar Filtros
							</button>
						</div>
					</div>
				</aside>
			</div>
		</div>
	</div>
</template>
