<script setup lang="ts">
interface Props {
	variant?: 'base' | 'outline' | 'solid' | 'primary';
	size?: 'sm' | 'md' | 'lg';
	loading?: boolean;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'base',
	size: 'md',
	loading: false,
	disabled: false,
	type: 'button',
});

const baseClasses =
	'inline-flex items-center justify-center font-sans font-extralight transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

const variantClasses = {
	base: 'bg-background text-text border shadow-sm',
	outline: 'bg-transparent border-2 border-primary text-white',
	solid: 'bg-primary text-background shadow-md',
	primary: 'bg-primary text-background shadow-md',
};

const sizeClasses = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-5 py-2.5 text-base',
	lg: 'px-7 py-3.5 text-lg',
};

const buttonClasses = computed(() => [
	baseClasses,
	variantClasses[props.variant],
	sizeClasses[props.size],
]);
</script>

<template>
	<button
		:type="type"
		:disabled="disabled || loading"
		:class="buttonClasses"
	>
		<svg
			v-if="loading"
			class="mr-2 h-4 w-4 animate-spin"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				class="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			/>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
			/>
		</svg>
		<slot></slot>
	</button>
</template>
