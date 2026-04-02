// @ts-check
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	plugins: {
		'simple-import-sort': simpleImportSort,
	},
	rules: {
		'simple-import-sort/imports': [
			'error',
			{
				groups: [['^\\u0000'], ['^@?\\w'], ['^@/'], ['^~/'], ['^\\.\\./'], ['^\\./']],
			},
		],
		'simple-import-sort/exports': 'error',
		'vue/multi-word-component-names': 'off',
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'never',
					component: 'always',
				},
			},
		],
	},
});
