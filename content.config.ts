import { defineCollection, defineContentConfig } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			source: '**/*.md',
			schema: z.object({
				title: z.string(),
				description: z.string(),
				date: z.string(),
				image: z.string().optional(),
				author: z.string().optional(),
				category: z.string().optional(),
				tags: z.array(z.string()).optional(),
			}),
		}),
	},
});
