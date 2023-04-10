import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			'~': r('.'),
			$components: '/src/components',
			$lib: '/src/lib',
			$routes: '/src/routes',
			$stores: '/src/stores',
			$utils: '/src/utils'
		}
	}
});
