<script setup lang="ts">
import { features } from '../constants';
</script>

<template>
	<div class="relative z-10 -mt-24 w-full px-4">
		<div class="mx-auto max-w-6xl">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div
					v-for="feature in features"
					:key="feature.title"
					class="bg-background border-text/10 w-full border p-6 shadow-md transition-shadow hover:shadow-lg"
				>
					<div
						class="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
					>
						<Icon
							v-if="feature.icon === 'book'"
							name="heroicons:book-open"
							class="text-primary"
							:size="32"
						/>
						<Icon
							v-else-if="feature.icon === 'computer'"
							name="heroicons:computer-desktop"
							class="text-primary"
							:size="32"
						/>
						<Icon
							v-else-if="feature.icon === 'library'"
							name="heroicons:building-library"
							class="text-primary"
							:size="32"
						/>
					</div>
					<h3 class="text-text mb-3 text-center font-serif text-xl font-normal">
						{{ feature.title }}
					</h3>
					<p class="text-text text-center font-sans">
						{{ feature.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
